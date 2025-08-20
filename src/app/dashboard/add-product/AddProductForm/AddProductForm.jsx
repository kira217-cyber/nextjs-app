"use client"
import AddProductForm from "@/app/components/AddProductForm/AddProductForm"
import { useState } from "react"


export default function AddProductPage() {
  const [products, setProducts] = useState([])

  const handleAddProduct = async (product) => {
    // Save to mock API
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
    const data = await res.json()

    setProducts(prev => [...prev, data])
    alert("Product added successfully!")
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <AddProductForm onAdd={handleAddProduct} />

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Added Products</h2>
        <ul>
          {products.map(p => (
            <li key={p.id}>{p.name} - ${p.price}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
