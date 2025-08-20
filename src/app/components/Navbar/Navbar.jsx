"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="flex gap-4 text-black">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>


        {session ? (
          <>
            <Link href="/dashboard/add-product">Add Product</Link>
            <button onClick={() => signOut()} className="text-red-500">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}

    </div>
  );
}
