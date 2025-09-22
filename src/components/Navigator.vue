<template>
  <div class="flex fixed shadow-xl w-screen justify-center z-50" style="background-color: oklch(26.9% 0 0 / 0.5); color: var(--light);">
    <nav class="flex">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About Us</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contact Us</RouterLink>
    </nav>
  </div>

</template>

<style scoped>

  a {
    padding: 1rem 2rem;
  }

  /* a:hover {
    color: var(--secondary);
  } */

  a.router-link-active {
    border-bottom: 2px var(--light) solid;
  }

</style>