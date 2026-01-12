<template>
  <div class="flex flex-col min-h-screen">
    
    <div class="relative bg-slate-900 h-auto min-h-[600px] lg:h-[80vh]">
      
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="@/assets/images/caricature-2.png" alt="Global Shipping">
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center lg:flex-row lg:justify-between lg:items-start pt-20 lg:pt-8 pb-20">
        
        <div class="w-full lg:max-w-xl mb-8 lg:mb-0 text-center lg:text-left">
        <!-- <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl mb-6">
          PT. Transport <br class="hidden sm:block" />
          <span class="text-blue-400">Anugerah Sakti</span>
        </h1> -->
          <p class="text-3xl text-blue-600 font-bold leading-relaxed drop-shadow-lg drop-shadow-neutral-50">
            PT. Transport Anugerah Sakti
          </p>
          <p class="text-xl text-gray-100 font-medium leading-relaxed drop-shadow-lg">
            Your Trusted Partner in Freight Forwarding and Logistics Solutions.
            Connecting your business to the world with speed and reliability.
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-end">
          <RouterLink :to="{ name: 'contact' }" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-colors shadow-lg">
            Get a Quote
          </RouterLink>
          <RouterLink :to="{ name: 'services' }" class="inline-flex items-center justify-center px-8 py-3 border-2 border-white/70 text-base font-medium rounded-lg text-white hover:bg-white/20 md:text-lg transition-colors backdrop-blur-sm shadow-lg">
            Our Services
          </RouterLink>
        </div>

      </div>
    </div>

    <div class="bg-gray-50 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-blue-600 font-semibold tracking-wide uppercase text-sm">What We Do</h2>
          <h2 class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Comprehensive Logistics Solutions</h2>
          <p class="mt-4 text-lg text-gray-600">A complete range of services tailored to your shipping and logistics needs.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div class="h-48 overflow-hidden">
              <img src="@/assets/images/cargo-4.jpg" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Airfreight">
            </div>
            <div class="p-8 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Airfreight Service</h3>
              <p class="text-gray-600 text-sm leading-relaxed flex-1">
                Specialist expertise in air import, export, door-to-door delivery, crating, storage, and customs clearance services when time is of the essence.
              </p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div class="h-48 overflow-hidden">
              <img src="@/assets/images/cargo-2.jpg" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Project Cargo">
            </div>
            <div class="p-8 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Project Cargo Handling</h3>
              <p class="text-gray-600 text-sm leading-relaxed flex-1">
                Arranging oversized goods, heavy lift, and dangerous cargo with integrated customs clearance for overseas destinations by air, sea, road, or rail.
              </p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div class="h-48 overflow-hidden">
              <img src="@/assets/images/cargo-3.jpg" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Seafreight">
            </div>
            <div class="p-8 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Seafreight Services</h3>
              <p class="text-gray-600 text-sm leading-relaxed flex-1">
                Worldwide shipment handling. We determine the most economical cargo routing and ensure safe, timely delivery with fast document processing.
              </p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div class="h-48 overflow-hidden">
              <img src="@/assets/images/cargo-6.jpg" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Warehousing">
            </div>
            <div class="p-8 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Warehousing & Distribution</h3>
              <p class="text-gray-600 text-sm leading-relaxed flex-1">
                Warehousing services to accommodate increasing needs in import and export distribution management with our own storage facilities.
              </p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div class="h-48 overflow-hidden bg-blue-50 flex items-center justify-center">
               <img src="@/assets/images/cargo-1.jpg" class="w-full h-full object-cover opacity-80 transform group-hover:scale-110 transition-transform duration-500" alt="Customs License">
            </div>
            <div class="p-8 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Customs Licensing</h3>
              <p class="text-gray-600 text-sm leading-relaxed flex-1">
                Assistance for importers lacking required documentation (NPWP, SIUP, API-U, NIK) via our trusted vendors for both exports and imports.
              </p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div class="h-48 overflow-hidden">
              <img src="@/assets/images/cargo-5.jpg" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" alt="Trucking">
            </div>
            <div class="p-8 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Land Transportation</h3>
              <p class="text-gray-600 text-sm leading-relaxed flex-1">
                Reliable trucking fleet and partner vendors. Competitive rates and excellent support operations for door-to-door delivery.
              </p>
            </div>
          </div>

        </div>
        
        <div class="mt-16 text-center">
             <RouterLink :to="{ name: 'services' }" class="text-blue-600 font-semibold hover:text-blue-800 flex items-center justify-center gap-2">
               View All Services Details <span>&rarr;</span>
             </RouterLink>
        </div>
      </div>
    </div>

    <div class="bg-slate-900">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span class="block">Ready to simplify your logistics?</span>
            <span class="block text-blue-400 mt-1">"WE ALWAYS SERVE YOU BETTER"</span>
          </h2>
          <p class="mt-4 text-lg text-gray-300">Contact our professional team today for a free consultation.</p>
        </div>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
          <div class="inline-flex rounded-md shadow">
            <a href="https://wa.me/628121792222" target="_blank" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors">
               Chat on WhatsApp
            </a>
          </div>
          <div class="inline-flex rounded-md shadow">
            <RouterLink :to="{ name: 'contact' }" class="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-lg text-gray-200 bg-slate-800 hover:bg-slate-700 transition-colors">
              Contact Us
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>