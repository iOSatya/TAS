<template>
  <div class="bg-slate-50 min-h-screen">
    
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl font-extrabold text-slate-900 sm:text-4xl">Contact Us</h1>
        <p class="mt-4 text-lg text-slate-500">We'd love to hear from you. Reach out to our team directly.</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        <div class="space-y-6">
          
          <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold text-slate-900">Head Office</h3>
                <p class="mt-2 text-slate-600 leading-relaxed">
                  Jalan Teluk Sarera Selatan No. 8<br>
                  RT. 011 RW. 004 Kelurahan Perak Utara,<br>
                  Kecamatan Pabean Cantian,<br>
                  Surabaya, 60165
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h3 class="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Get in Touch</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <div>
                  <span class="block text-sm text-slate-500">Phone (Hunting)</span>
                  <span class="text-slate-900 font-medium">031-3281470, 99096131</span>
                </div>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                <div>
                  <span class="block text-sm text-slate-500">Fax</span>
                  <span class="text-slate-900 font-medium">031-3294482</span>
                </div>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div>
                  <span class="block text-sm text-slate-500">Email</span>
                  <a href="mailto:csv.tassby@gmail.com" class="text-blue-600 font-medium hover:underline">csv.tassby@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 rounded-xl shadow-sm border border-blue-100 p-8">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-blue-900">Legal Information</h3>
              <button
                @click="showLegalModal = true"
                class="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline"
              >
                More
              </button>
            </div>
          
            <div class="space-y-2 text-sm text-blue-800">
              <p><span class="font-semibold">NPWP:</span> 21.115.067.7-614.000</p>
              <p><span class="font-semibold">NIK (Customs ID):</span> 03.028599 (DD. 28 Dec 2011)</p>
            </div>
          </div>


        </div>

        <div class="h-full min-h-[500px] bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative">
          <iframe 
            src="https://maps.google.com/maps?q=Jalan%20Teluk%20Sarera%20Selatan%20No.%208%20Surabaya&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            class="absolute inset-0 w-full h-full"
          >
          </iframe>
        </div>

      </div>
    </div>
  </div>

  <!-- Legal Information Modal -->
  <div v-if="showLegalModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div class="bg-white rounded-xl shadow-xl max-w-lg w-full mx-4 p-6 relative">

      <!-- Close button -->
      <button
        @click="showLegalModal = false"
        class="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
      >
        ✕
      </button>

      <h3 class="text-xl font-bold text-slate-900 mb-4">
        Legal Information
      </h3>

      <div class="space-y-3 text-sm text-slate-700">
        <p><span class="font-semibold">Company Name:</span> PT TRANSPORT ANUGERAH SAKTI</p>
        <p><span class="font-semibold">NPWP:</span> 21.115.067.7-614.000</p>
        <p><span class="font-semibold">NIK (Customs ID):</span> 03.028599</p>
        <p><span class="font-semibold">Issued Date:</span> 28 December 2011</p>
        <p><span class="font-semibold">Business Field:</span> Freight Forwarding & Logistics</p>
        <p><span class="font-semibold">Registered Address:</span><br>
          Jalan Teluk Sarera Selatan No. 8,<br>
          Surabaya, 60165
        </p>
      </div>

      <div class="mt-6 text-right">
        <button
          @click="showLegalModal = false"
          class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const showLegalModal = ref(false)
</script>
