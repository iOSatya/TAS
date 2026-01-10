<template>
  <div class="bg-white">
    
    <div class="relative bg-slate-900 py-24">
      <div class="absolute inset-0 overflow-hidden">
        <img src="@/assets/images/cargo-5.jpg" alt="About Background" class="w-full h-full object-cover opacity-20">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl font-extrabold text-white sm:text-5xl">About Our Company</h1>
        <p class="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
          Built on a foundation of trust, expertise, and a commitment to service excellence since 2009.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
          <div class="border-l-4 border-blue-600 pl-6">
            <h2 class="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Since 2009</h2>
            <h3 class="text-3xl font-bold text-slate-900 mb-6">Our History</h3>
            <p class="text-lg text-slate-600 leading-relaxed">
              PT. Transport Anugerah Sakti was officially incorporated on <span class="font-semibold text-slate-900">January 14th, 2009</span>. 
              From day one, we have been dedicated to taking over and improving Freight Forwarding, Logistics, and Customs Clearance Operation Services. 
              We have grown to provide comprehensive services for project and domestic transportation as well as International Airfreight Forwarding Activities.
            </p>
          </div>
        </div>
        <div class="md:w-1/2">
           <div class="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg text-center">
              <p class="text-sm text-slate-500 uppercase tracking-widest mb-4">Our Motto</p>
              <blockquote class="text-3xl font-serif italic text-slate-800">
                "WE ALWAYS SERVE YOU BETTER"
              </blockquote>
           </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Our Approach</h3>
          <p class="text-slate-600 leading-relaxed">
            We aim to be a truly <strong>One Stop Solution</strong>. We achieve this by pooling unique talents from every faculty of the logistics and shipping industries. This methodology allows us to provide our customers with the most efficient and reliable service, saving you time, effort, and resources.
          </p>
        </div>

        <div class="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Business Concept</h3>
          <p class="text-slate-600 leading-relaxed">
            We personalize our services to cater specifically to your needs. We believe that size doesn't matter; flexible operations often achieve better margins and more effective service. We leverage technology and strategic outsourcing to serve you excellently.
          </p>
        </div>
      </div>

    </div>

    <div class="relative w-full h-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div class="absolute bottom-0 w-full h-1 bg-slate-200"></div>
      
      <div class="truck-animation absolute bottom-1">
        <svg class="w-16 h-16 text-blue-600 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
           <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
        <div class="absolute top-2 -left-4 space-y-1">
           <div class="w-4 h-0.5 bg-slate-300 rounded-full"></div>
           <div class="w-6 h-0.5 bg-slate-300 rounded-full ml-2"></div>
           <div class="w-3 h-0.5 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.truck-animation {
  animation: drive-truck 8s linear infinite;
  will-change: transform;
}

@keyframes drive-truck {
  0% {
    transform: translateX(-150px); /* Start off-screen left */
  }
  100% {
    transform: translateX(100vw); /* Move to off-screen right */
  }
}
</style>