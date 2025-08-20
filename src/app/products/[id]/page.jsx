"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductDetailsPage() {
  const params = useParams()  // { id: '1' }
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        const p = data.find(item => item.id === parseInt(params.id))
        setProduct(p)
      })
  }, [params.id])

  if (!product) return <p>Loading...</p>

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
    </div>
  )
}
