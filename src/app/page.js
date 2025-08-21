"use client"

import HeroSection from "./components/HeroSection/HeroSection"


export default function HomePage() {


  return (
    <div>
      {/* Hero */}
      <section className="">
       <HeroSection />
      </section>

      {/* Product Highlights */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold">Product Highlights</h2>
        <p>Check out our featured products!</p>
      </section>

      
    </div>
  )
}
