"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/products",
    });
    console.log(result);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side Image */}
      <div className="hidden md:flex md:w-1/2 relative items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Login Illustration"
          className="w-full h-full object-cover rounded-4xl"
        />
        <div className="absolute bottom-10 left-10 ">
          <p className="text-lg font-semibold max-w-xs">
            “Simply all the tools that my team and I need.”
          </p>
          <p className="text-sm mt-2">— Karen Yue, Director of Marketing</p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full px-6 py-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-2">
            Welcome back to <span className="text-primary">Store-Apple</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            Build your design system effortlessly with our powerful component library.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-base-100  p-6 rounded-2xl shadow-md space-y-4"
          >
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex justify-between items-center text-sm">
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span>Remember me</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Log in
            </button>

            <div className="divider">OR</div>

            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/products" })}
              className="btn btn-outline w-full flex gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
