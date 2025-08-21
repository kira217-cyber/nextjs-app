"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "@/app/components/Loading/Loading";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        const p = data.find((item) => item.id === parseInt(params.id));
        setProduct(p);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-gray-500">Product not found!</p>
        <button
          onClick={() => router.push("/products")}
          className="mt-4 text-primary px-4 py-2 rounded border border-primary hover:bg-primary hover:text-white transition"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-5xl w-full rounded-xl shadow-lg overflow-hidden md:flex md:gap-6 ">
        {/* Product Image */}
        <div className="md:flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover md:h-full"
          />
        </div>

        {/* Product Info */}
        <div className="p-6 md:flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className=" mb-4">{product.description}</p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">${product.price}</p>
            <button className="btn btn-primary hover:cursor-pointer px-6 py-2 rounded-lg transition">
              Buy Now
            </button>
          </div>

          <Link
            href="/products"
            className="inline-block mt-4 text-primary hover:underline"
          >
            &larr; Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
