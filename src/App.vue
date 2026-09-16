<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useUserStore } from './stores/user'

export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const userStore = useUserStore()

    onMounted(() => {
      if (userStore.isAuthenticated && !userStore.user) {
        userStore.fetchProfile()
      }
    })

    return {}
  },
}
</script>
