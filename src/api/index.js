const API_BASE = 'http://localhost:8000/api'

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  }

  const config = {
    ...options,
    headers
  }

  const response = await fetch(url, config)
  const data = await response.json()

  if (!response.ok) {
    let errorMessage = data.message || `HTTP ${response.status}`
    if (data.errors) {
      const errorFields = Object.keys(data.errors)
      if (errorFields.length > 0) {
        errorMessage = data.errors[errorFields[0]][0]
      }
    }
    throw new Error(errorMessage)
  }

  return data
}

export const authAPI = {
  register(credentials) {
    return request('/register', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
  },

  login(credentials) {
    return request('/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
  },

  logout(token) {
    return request('/logout', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    })
  },

  getProfile(token) {
    return request('/profile', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  },

  updateProfile(token, updates) {
    return request('/profile', {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(updates)
    })
  },

  deleteAccount(token, password) {
    return request('/profile', {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ password })
    })
  }
}

export const adminAPI = {
  getUsers(token, query = {}) {
    const params = new URLSearchParams()
    if (query.search) params.set('search', query.search)
    if (query.is_admin !== undefined) params.set('is_admin', query.is_admin)
    if (query.page) params.set('page', query.page)
    if (query.per_page) params.set('per_page', query.per_page)
    const queryString = params.toString() ? `?${params.toString()}` : ''
    return request(`/admin/users${queryString}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  },

  getUser(token, userId) {
    return request(`/admin/users/${userId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  },

  createUser(token, userData) {
    return request('/admin/users', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(userData)
    })
  },

  updateUser(token, userId, userData) {
    return request(`/admin/users/${userId}`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(userData)
    })
  },

  deleteUser(token, userId) {
    return request(`/admin/users/${userId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    })
  },

  resetPassword(token, userId) {
    return request(`/admin/users/${userId}/reset-password`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    })
  },

  toggleAdminStatus(token, userId) {
    return request(`/admin/users/${userId}/admin-status`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` }
    })
  }
}