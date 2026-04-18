<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">User Management</h1>
        <p class="mt-2 text-gray-600">Manage users, reset passwords, and toggle admin status.</p>
      </div>

      <div class="bg-white rounded-2xl shadow-xl p-6">
        <!-- Search and Filter Bar -->
        <div class="flex flex-col sm:flex-row gap-4 mb-6">
          <div class="flex-1">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by name or email..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              @input="debouncedFetch"
            />
          </div>
          <div class="flex items-center gap-4">
            <select
              v-model="adminFilter"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              @change="fetchUsers"
            >
              <option value="">All Users</option>
              <option value="true">Admins Only</option>
              <option value="false">Non-Admins Only</option>
            </select>
            <button
              @click="showCreateModal = true"
              class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Create User
            </button>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="adminStore.loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p class="mt-2 text-gray-600">Loading users...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="adminStore.error" class="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p class="text-red-700 text-sm">{{ adminStore.error }}</p>
          <button @click="fetchUsers" class="mt-2 text-red-600 hover:text-red-800 font-medium">Retry</button>
        </div>

        <!-- Users Table -->
        <div v-else>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="user in adminStore.users" :key="user.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ user.id }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.name }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.email }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      :class="[
                        'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                        user.is_admin ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      ]"
                    >
                      {{ user.is_admin ? 'Admin' : 'User' }}
                    </span>
                  </td>
                   <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                     <button
                       @click="resetPassword(user.id)"
                       class="text-blue-600 hover:text-blue-900 font-medium"
                       :disabled="adminStore.loading"
                     >
                       Reset Password
                     </button>
                     <button
                       @click="toggleAdminStatus(user.id)"
                       class="text-purple-600 hover:text-purple-900 font-medium"
                       :disabled="adminStore.loading"
                     >
                       {{ user.is_admin ? 'Revoke Admin' : 'Make Admin' }}
                     </button>
                     <button
                       @click="deleteUser(user.id, user.name)"
                       class="text-red-600 hover:text-red-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                       :disabled="adminStore.loading || user.id === userStore.user?.id"
                       :title="user.id === userStore.user?.id ? 'You cannot delete your own account' : ''"
                     >
                       Delete
                     </button>
                   </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div v-if="adminStore.pagination.pages > 1" class="mt-8 flex justify-center items-center gap-4">
            <button
              @click="prevPage"
              :disabled="adminStore.pagination.page <= 1"
              class="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
            >
              Previous
            </button>
            <span class="text-sm text-gray-700">
              Page {{ adminStore.pagination.page }} of {{ adminStore.pagination.pages }}
            </span>
            <button
              @click="nextPage"
              :disabled="adminStore.pagination.page >= adminStore.pagination.pages"
              class="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
            >
              Next
            </button>
          </div>

          <!-- Empty State -->
          <div v-if="adminStore.users.length === 0" class="text-center py-12 text-gray-500">
            No users found.
          </div>
        </div>
      </div>
    </div>

    <!-- Create User Modal -->
    <div v-if="showCreateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-gray-900">Create New User</h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="createUser">
          <div class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                v-model="newUser.name"
                id="name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                v-model="newUser.email"
                id="email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                v-model="newUser.password"
                id="password"
                type="password"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label class="flex items-center">
                <input
                  v-model="newUser.is_admin"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span class="ml-2 text-sm text-gray-700">Grant admin privileges</span>
              </label>
            </div>
          </div>

          <div v-if="createError" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-700 text-sm">{{ createError }}</p>
          </div>

          <div class="mt-6 flex justify-end gap-3">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="createLoading"
              class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <span v-if="createLoading">Creating...</span>
              <span v-else>Create User</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { useAdminStore } from '@/stores/admin'
import { useUserStore } from '@/stores/user'

const adminStore = useAdminStore()
const userStore = useUserStore()

const searchQuery = ref('')
const adminFilter = ref('')
const showCreateModal = ref(false)
const createLoading = ref(false)
const createError = ref('')

const newUser = reactive({
  name: '',
  email: '',
  password: '',
  is_admin: false
})

let debounceTimer = null

function debouncedFetch() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    fetchUsers()
  }, 300)
}

function fetchUsers() {
  const query = {}
  if (searchQuery.value) query.search = searchQuery.value
  if (adminFilter.value !== '') query.is_admin = adminFilter.value === 'true'
  adminStore.fetchUsers(query)
}

function prevPage() {
  if (adminStore.pagination.page > 1) {
    adminStore.pagination.page--
    fetchUsers()
  }
}

function nextPage() {
  if (adminStore.pagination.page < adminStore.pagination.pages) {
    adminStore.pagination.page++
    fetchUsers()
  }
}

async function resetPassword(userId) {
  if (!confirm('Are you sure you want to reset this user\'s password? A new temporary password will be generated.')) return
  const result = await adminStore.resetPassword(userId)
  if (result.success) {
    alert('Password reset successful. The user will receive an email with the new password.')
  } else {
    alert(`Failed to reset password: ${result.error}`)
  }
}

async function toggleAdminStatus(userId) {
  const action = adminStore.users.find(u => u.id === userId)?.is_admin ? 'revoke admin privileges from' : 'grant admin privileges to'
  if (!confirm(`Are you sure you want to ${action} this user?`)) return
  const result = await adminStore.toggleAdminStatus(userId)
  if (result.success) {
    fetchUsers()
  } else {
    alert(`Failed to toggle admin status: ${result.error}`)
  }
}

async function deleteUser(userId, userName) {
  if (userStore.user?.id === userId) {
    alert('You cannot delete your own account. Please ask another admin to delete your account.')
    return
  }
  if (!confirm(`Are you sure you want to delete user "${userName}"? This action cannot be undone.`)) return
  const result = await adminStore.deleteUser(userId)
  if (result.success) {
    alert('User deleted successfully.')
    fetchUsers()
  } else {
    alert(`Failed to delete user: ${result.error}`)
  }
}

async function createUser() {
  createLoading.value = true
  createError.value = ''
  const result = await adminStore.createUser(newUser)
  createLoading.value = false
  if (result.success) {
    closeModal()
    fetchUsers()
    alert('User created successfully.')
  } else {
    createError.value = result.error || 'Failed to create user.'
  }
}

function closeModal() {
  showCreateModal.value = false
  Object.assign(newUser, {
    name: '',
    email: '',
    password: '',
    is_admin: false
  })
  createError.value = ''
}

onMounted(() => {
  fetchUsers()
})

watch([searchQuery, adminFilter], () => {
  adminStore.pagination.page = 1
})
</script>