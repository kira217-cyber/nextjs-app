"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/products", // লগইন হলে products এ যাবে
    })
    console.log(result)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {/* Google Login */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="px-4 py-2 mb-4 bg-red-500 text-white rounded"
      >
        Login with Google
      </button>

      {/* Credentials Login */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64">
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login with Credentials
        </button>
      </form>
    </div>
  )
}
