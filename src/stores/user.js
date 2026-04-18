import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { authAPI } from '@/api'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const isAuthenticated = computed(() => !!token.value)

  function setToken(newToken) {
    token.value = newToken
    if (newToken) {
      localStorage.setItem('token', newToken)
    } else {
      localStorage.removeItem('token')
    }
  }

  function setUser(userData) {
    user.value = userData
  }

  async function register(credentials) {
    try {
      const data = await authAPI.register(credentials)
      setToken(data.token || data.access_token)
      setUser(data.user)
      return { success: true, data }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async function login(credentials) {
    try {
      const data = await authAPI.login(credentials)
      setToken(data.token || data.access_token)
      setUser(data.user)
      return { success: true, data }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async function logout() {
    try {
      await authAPI.logout(token.value)
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setToken(null)
      setUser(null)
    }
  }

  async function fetchProfile() {
    try {
      const data = await authAPI.getProfile(token.value)
      setUser(data.user || data)
      return { success: true, data }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async function updateProfile(updates) {
    try {
      const data = await authAPI.updateProfile(token.value, updates)
      setUser(data.user || data)
      return { success: true, data }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async function deleteAccount(password) {
    try {
      await authAPI.deleteAccount(token.value, password)
      setToken(null)
      setUser(null)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  return {
    user,
    token,
    isAuthenticated,
    register,
    login,
    logout,
    fetchProfile,
    updateProfile,
    deleteAccount
  }
})