"use client"
import { useState } from "react"

export default function AddProductForm({ onAdd }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [file, setFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let imageUrl = ""

    if (file) {
      const formData = new FormData()
      formData.append("image", file)

      // Server-side route এ POST
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      })

      const data = await res.json()
      imageUrl = data.url
    }

    const newProduct = { name, description, price, image: imageUrl }

    onAdd(newProduct)
    
    // Reset form
    setName("")
    setDescription("")
    setPrice("")
    setFile(null)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64">
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} required />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Product</button>
    </form>
  )
}
