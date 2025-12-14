<template>
  <footer class="bg-slate-900 text-white border-t border-slate-800">
    <div class="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white tracking-tight">PT. Transport Anugerah Sakti</h3>
          <p class="text-slate-400 text-sm leading-relaxed">
            Your one-stop solution for complex logistics, warehousing, and shipping needs. We serve you better with speed, reliability, and precision.
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li><RouterLink :to="{ name: 'home' }" class="text-slate-400 hover:text-white transition-colors text-sm">Home</RouterLink></li>
            <li><RouterLink :to="{ name: 'services' }" class="text-slate-400 hover:text-white transition-colors text-sm">Our Services</RouterLink></li>
            <li><RouterLink :to="{ name: 'about' }" class="text-slate-400 hover:text-white transition-colors text-sm">About Us</RouterLink></li>
            <li><RouterLink :to="{ name: 'contact' }" class="text-slate-400 hover:text-white transition-colors text-sm">Contact Support</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Contact Details</h3>
          <ul class="space-y-3 text-slate-400 text-sm">
            <li class="flex flex-col">
              <span class="text-white font-medium">Phone (Hunting):</span>
              <span>031-3281470</span>
            </li>
            <li class="flex flex-col">
              <span class="text-white font-medium">Secondary:</span>
              <span>99096131</span>
            </li>
            <li class="flex flex-col">
              <span class="text-white font-medium">Fax:</span>
              <span>031-3294482</span>
            </li>
            <li class="flex flex-col">
              <span class="text-white font-medium">Email:</span>
              <a href="mailto:csv.tassby@gmail.com" class="hover:text-blue-400 transition-colors">csv.tassby@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Our Office</h3>
          <address class="text-slate-400 text-sm leading-relaxed not-italic">
            Jalan Teluk Sarera Selatan No. 8<br>
            RT. 011 RW. 004<br>
            Kelurahan Perak Utara,<br>
            Kecamatan Pabean Cantian,<br>
            Surabaya, 60165<br>
            Indonesia
          </address>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm text-center md:text-left">
          &copy; 2025 PT. Transport Anugerah Sakti. All rights reserved.
        </p>
        <div class="flex items-center space-x-2 text-slate-600 text-sm">
           <span>Logistics & Forwarding</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>