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