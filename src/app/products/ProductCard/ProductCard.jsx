"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map(p => (
        <div key={p.id} className="border p-4">
          <img src={p.image} className="h-40 w-full object-cover mb-2" />
          <h2 className="font-bold">{p.name}</h2>
          <p>{p.description}</p>
          <p className="font-bold">${p.price}</p>
          <Link href={`/products/${p.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
            Details
          </Link>
        </div>
      ))}
    </div>
  )
}
