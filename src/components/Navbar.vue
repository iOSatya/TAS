<template>
  <header class="sticky top-0 z-50 w-full font-sans">
    
    <nav class="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          
          <div class="flex-shrink-0 flex items-center">
            <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2 group">
              <img src="@/assets/images/logo.jpg" alt="TAS Logo" class="h-10 w-auto sm:h-12 object-contain transition-transform duration-300 group-hover:scale-105" />
            </RouterLink>
          </div>

          <div class="hidden lg:flex flex-col items-center justify-center select-none">
             <h1 class="text-xl xl:text-2xl font-extrabold text-[#5d5c8d] tracking-tight leading-none font-sans uppercase">
               PT. Transport Anugerah Sakti
             </h1>
             <span class="text-[0.65rem] font-bold text-[#b47d7d] tracking-widest uppercase mt-1 transform scale-x-105">
               International Freight Forwarding & Customs Brokerage
             </span>
          </div>

          <div class="hidden md:flex md:items-center md:space-x-8">
             <template v-for="item in navItems" :key="item.name">
                <RouterLink 
                  :to="{ name: item.route }" 
                  class="relative py-2 text-sm font-bold tracking-wide text-gray-600 hover:text-blue-700 transition-colors duration-200 group uppercase"
                  active-class="text-blue-700"
                >
                  {{ item.name }}
                  <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" :class="{ 'scale-x-100': $route.name === item.route }"></span>
                </RouterLink>
             </template>
          </div>

          <div class="flex items-center md:hidden">
            <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg v-if="!isOpen" class="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform opacity-0 -translate-y-2"
        enter-to-class="transform opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform opacity-100 translate-y-0"
        leave-to-class="transform opacity-0 -translate-y-2"
      >
        <div v-show="isOpen" class="md:hidden border-t border-gray-100 bg-white shadow-xl absolute w-full left-0 z-40" id="mobile-menu">
          <div class="px-4 py-6 space-y-3">
            <template v-for="item in navItems" :key="item.name">
              <RouterLink 
                :to="{ name: item.route }" 
                class="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100"
                active-class="bg-blue-50 text-blue-700 font-bold border-blue-100"
                @click="isOpen = false"
              >
                {{ item.name }}
              </RouterLink>
            </template>
            <div class="pt-4 mt-4 border-t border-gray-100">
               <RouterLink :to="{ name: 'contact' }" @click="isOpen = false" class="block w-full text-center px-5 py-4 rounded-lg bg-blue-600 text-white text-base font-bold shadow hover:bg-blue-700 transition-colors">
                 Request Quote
               </RouterLink>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const navItems = [
  { name: 'Home', route: 'home' },
  { name: 'Services', route: 'services' },
  { name: 'About', route: 'about' },
  { name: 'Contact', route: 'contact' },
];
</script>