"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ProtectedRoute from "@/app/components/ProtectedRoute/ProtectedRoute";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const router = useRouter();

  // ডেমো auth
  const isLoggedIn = true;

  if (!isLoggedIn) {
    router.push("/login");
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price),
      }),
    });

    if (res.ok) {
      toast.success("✅ Product added successfully!");
      setFormData({ name: "", description: "", price: "", image: "" });
      router.push("/products");
      router.refresh();
    } else {
      toast.error("❌ Failed to add product");
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="max-w-md w-full p-6 shadow-md rounded-xl ">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Add New Product
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="description"
              placeholder="Product Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Product Image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full btn btn-primary btn-outline p-2 rounded"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}
