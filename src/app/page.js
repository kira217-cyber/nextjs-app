"use client"

import HeroSection from "./components/HeroSection/HeroSection"
import ProductHighlights from "./components/ProductHighlights/ProductHighlights"


export default function HomePage() {


  return (
    <div>
      {/* Hero */}
      <section className="">
       <HeroSection />
      </section>

      {/* Product Highlights */}
      <section className="">
        <ProductHighlights />
      </section>

      
    </div>
  )
}
