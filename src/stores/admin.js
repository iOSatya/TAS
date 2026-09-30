import { ref } from 'vue'
import { defineStore } from 'pinia'
import { adminAPI } from '@/api'
import { useUserStore } from './user'

export const useAdminStore = defineStore('admin', () => {
  const userStore = useUserStore()
  const users = ref([])
  const pagination = ref({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  })
  const loading = ref(false)
  const error = ref(null)

  function getToken() {
    return userStore.token
  }

  async function fetchUsers(query = {}) {
    loading.value = true
    error.value = null
    try {
      const token = getToken()
      if (!token) throw new Error('Not authenticated')
      const data = await adminAPI.getUsers(token, { 
        ...query, 
        page: query.page || pagination.value.page, 
        per_page: query.per_page || pagination.value.limit 
      })
      users.value = data.data || []
      // Laravel mengembalikan paginator mentah (field di level atas);
      // bentuk { data, meta } hanya berlaku bila backend memakai Resource Collection.
      const meta = data.meta ?? data
      if (meta && meta.current_page) {
        pagination.value.page = meta.current_page
        pagination.value.total = meta.total
        pagination.value.pages = meta.last_page
        pagination.value.limit = meta.per_page
      }
      return { success: true, data }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  async function getUser(userId) {
    loading.value = true
    error.value = null
    try {
      const token = getToken()
      if (!token) throw new Error('Not authenticated')
      const data = await adminAPI.getUser(token, userId)
      return { success: true, data }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  async function createUser(userData) {
    loading.value = true
    error.value = null
    try {
      const token = getToken()
      if (!token) throw new Error('Not authenticated')
      const data = await adminAPI.createUser(token, userData)
      return { success: true, data }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  async function updateUser(userId, userData) {
    loading.value = true
    error.value = null
    try {
      const token = getToken()
      if (!token) throw new Error('Not authenticated')
      const data = await adminAPI.updateUser(token, userId, userData)
      return { success: true, data }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  async function deleteUser(userId) {
    loading.value = true
    error.value = null
    try {
      const token = getToken()
      if (!token) throw new Error('Not authenticated')
      const data = await adminAPI.deleteUser(token, userId)
      return { success: true, data }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  async function resetPassword(userId) {
    loading.value = true
    error.value = null
    try {
      const token = getToken()
      if (!token) throw new Error('Not authenticated')
      const data = await adminAPI.resetPassword(token, userId)
      return { success: true, data }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  async function toggleAdminStatus(userId) {
    loading.value = true
    error.value = null
    try {
      const token = getToken()
      if (!token) throw new Error('Not authenticated')
      const data = await adminAPI.toggleAdminStatus(token, userId)
      return { success: true, data }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      loading.value = false
    }
  }

  return {
    users,
    pagination,
    loading,
    error,
    fetchUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    resetPassword,
    toggleAdminStatus
  }
})