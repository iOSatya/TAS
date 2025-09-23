<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <RouterLink :to="{ name: 'home' }" class="flex flex-col items-center">
            <img src="@/assets/images/logo.jpg" class="h-8"></img>
          </RouterLink>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <RouterLink :to="{ name: 'home' }" class="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</RouterLink>
            <RouterLink :to="{ name: 'services' }" class="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</RouterLink>
            <RouterLink :to="{ name: 'about' }" class="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</RouterLink>
            <RouterLink :to="{ name: 'contact' }" class="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</RouterLink>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button @click="isOpen = !isOpen" type="button" class="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg :class="{'hidden': isOpen, 'block': !isOpen }" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg :class="{'hidden': !isOpen, 'block': isOpen }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div :class="{'block': isOpen, 'hidden': !isOpen}" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
        <a href="#" class="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Services</a>
        <a href="#" class="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
        <a href="#" class="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>