<template>
  <div>
    <Hero />
    <div class="p-8">
      <h2 class="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="@/assets/images/cargo-1.jpg"
              alt="Air Freight"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Airfreight Service</h2>
            <p>
              When time is the essence, our air freight teams offer specialist
              expertise...
            </p>
            <div class="card-actions justify-end">
              <router-link to="/services" class="btn btn-primary"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="@/assets/images/cargo-2.jpg"
              alt="Sea Freight"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Seafreight Services</h2>
            <p>
              PT. Transport Anugerah Sakti will serve your shipment through all
              around the world...
            </p>
            <div class="card-actions justify-end">
              <router-link to="/services" class="btn btn-primary"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="@/assets/images/cargo-3.jpg"
              alt="Land Transportation"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Land Transportation</h2>
            <p>
              We are own trucking and have a qualified vendor trucking company as
              well...
            </p>
            <div class="card-actions justify-end">
              <router-link to="/services" class="btn btn-primary"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
</script>