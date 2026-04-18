<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Your Profile</h1>
        <p class="text-gray-600 mt-2">Manage your account settings</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl shadow p-6">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-2xl text-blue-600 font-bold">{{ initials }}</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">{{ userStore.user?.name || 'User' }}</h3>
                <p class="text-sm text-gray-500">{{ userStore.user?.email || '' }}</p>
              </div>
            </div>
            <nav class="space-y-2">
              <button
                @click="activeTab = 'profile'"
                :class="[activeTab === 'profile' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50']"
                class="w-full text-left px-4 py-3 rounded-lg font-medium transition"
              >
                Personal Information
              </button>
              <button
                @click="activeTab = 'password'"
                :class="[activeTab === 'password' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50']"
                class="w-full text-left px-4 py-3 rounded-lg font-medium transition"
              >
                Change Password
              </button>
              <button
                @click="activeTab = 'delete'"
                :class="[activeTab === 'delete' ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-50']"
                class="w-full text-left px-4 py-3 rounded-lg font-medium transition"
              >
                Delete Account
              </button>
            </nav>
            <div class="mt-8 pt-6 border-t border-gray-200">
              <button
                @click="handleLogout"
                class="w-full text-gray-700 hover:text-red-700 hover:bg-red-50 px-4 py-3 rounded-lg font-medium transition text-left"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Profile Update -->
          <div v-if="activeTab === 'profile'" class="bg-white rounded-2xl shadow p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
            <form @submit.prevent="updateProfile" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  v-model="profileForm.name"
                  id="name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  v-model="profileForm.email"
                  id="email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div v-if="profileError" class="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p class="text-red-700 text-sm">{{ profileError }}</p>
              </div>
              <div v-if="profileSuccess" class="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p class="text-green-700 text-sm">Profile updated successfully!</p>
              </div>
              <button
                type="submit"
                :disabled="profileLoading"
                class="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <span v-if="profileLoading">Updating...</span>
                <span v-else>Save Changes</span>
              </button>
            </form>
          </div>

          <!-- Password Update -->
          <div v-if="activeTab === 'password'" class="bg-white rounded-2xl shadow p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Change Password</h2>
            <form @submit.prevent="updatePassword" class="space-y-6">
              <div>
                <label for="current_password" class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <input
                  v-model="passwordForm.current_password"
                  id="current_password"
                  type="password"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label for="new_password" class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input
                  v-model="passwordForm.password"
                  id="new_password"
                  type="password"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <input
                  v-model="passwordForm.password_confirmation"
                  id="password_confirmation"
                  type="password"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div v-if="passwordError" class="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p class="text-red-700 text-sm">{{ passwordError }}</p>
              </div>
              <div v-if="passwordSuccess" class="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p class="text-green-700 text-sm">Password updated successfully!</p>
              </div>
              <button
                type="submit"
                :disabled="passwordLoading"
                class="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <span v-if="passwordLoading">Updating...</span>
                <span v-else>Update Password</span>
              </button>
            </form>
          </div>

          <!-- Delete Account -->
          <div v-if="activeTab === 'delete'" class="bg-white rounded-2xl shadow p-8 border border-red-200">
            <h2 class="text-2xl font-bold text-red-700 mb-2">Delete Account</h2>
            <p class="text-gray-600 mb-6">This action is irreversible. All your data will be permanently removed.</p>
            <div class="space-y-4">
              <div v-if="deleteError" class="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p class="text-red-700 text-sm">{{ deleteError }}</p>
              </div>
              <div v-if="deleteSuccess" class="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p class="text-green-700 text-sm">Account deleted. Redirecting...</p>
              </div>
              <button
                @click="confirmDelete = true"
                :disabled="deleteLoading"
                class="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <span v-if="deleteLoading">Deleting...</span>
                <span v-else>Delete My Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div v-if="confirmDelete" class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
      <h3 class="text-xl font-bold text-gray-900 mb-4">Are you sure?</h3>
      <p class="text-gray-600 mb-6">This action cannot be undone. Please type your password to confirm.</p>
      <input
        v-model="deletePassword"
        type="password"
        placeholder="Enter your password"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
      />
      <div class="flex gap-4">
        <button
          @click="confirmDelete = false"
          class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button
          @click="deleteAccount"
          :disabled="!deletePassword"
          class="flex-1 bg-red-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Delete Account
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const activeTab = ref('profile')
const confirmDelete = ref(false)
const deletePassword = ref('')

const profileForm = reactive({
  name: userStore.user?.name || '',
  email: userStore.user?.email || ''
})

const passwordForm = reactive({
  current_password: '',
  password: '',
  password_confirmation: ''
})

const profileLoading = ref(false)
const passwordLoading = ref(false)
const deleteLoading = ref(false)

const profileError = ref('')
const passwordError = ref('')
const deleteError = ref('')

const profileSuccess = ref(false)
const passwordSuccess = ref(false)
const deleteSuccess = ref(false)

const initials = computed(() => {
  const name = userStore.user?.name || ''
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
})

onMounted(async () => {
  if (userStore.isAuthenticated && !userStore.user) {
    await userStore.fetchProfile()
  }
  if (userStore.user) {
    profileForm.name = userStore.user.name
    profileForm.email = userStore.user.email
  }
})

async function updateProfile() {
  profileLoading.value = true
  profileError.value = ''
  profileSuccess.value = false

  const result = await userStore.updateProfile({
    name: profileForm.name,
    email: profileForm.email
  })

  profileLoading.value = false

  if (result.success) {
    profileSuccess.value = true
    setTimeout(() => profileSuccess.value = false, 3000)
  } else {
    profileError.value = result.error || 'Failed to update profile'
  }
}

async function updatePassword() {
  if (passwordForm.password !== passwordForm.password_confirmation) {
    passwordError.value = 'Passwords do not match'
    return
  }

  passwordLoading.value = true
  passwordError.value = ''
  passwordSuccess.value = false

  const result = await userStore.updateProfile({
    current_password: passwordForm.current_password,
    password: passwordForm.password,
    password_confirmation: passwordForm.password_confirmation
  })

  passwordLoading.value = false

  if (result.success) {
    passwordSuccess.value = true
    passwordForm.current_password = ''
    passwordForm.password = ''
    passwordForm.password_confirmation = ''
    setTimeout(() => passwordSuccess.value = false, 3000)
  } else {
    passwordError.value = result.error || 'Failed to update password'
  }
}

async function deleteAccount() {
  deleteLoading.value = true
  deleteError.value = ''

  const result = await userStore.deleteAccount(deletePassword.value)

  deleteLoading.value = false

  if (result.success) {
    deleteSuccess.value = true
    setTimeout(() => router.push('/'), 1500)
  } else {
    deleteError.value = result.error || 'Failed to delete account'
  }
  confirmDelete.value = false
  deletePassword.value = ''
}

async function handleLogout() {
  await userStore.logout()
  router.push('/')
}
</script>