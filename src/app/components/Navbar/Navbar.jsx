"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {  Menu, X, Sun, Moon } from "lucide-react";
import toast from "react-hot-toast";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  // ---------- Theme (DaisyUI) ----------
  const [theme, setTheme] = useState("light");
  // প্রথমে localStorage থেকে থিম রিস্টোর
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pv-theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        // সিস্টেম প্রেফারেন্স পড়ে সেট করা
        const prefersDark =
          typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = prefersDark ? "dark" : "light";
        setTheme(initial);
        document.documentElement.setAttribute("data-theme", initial);
      }
    } catch {}
  }, []);

  // থিম চেঞ্জে html data-theme + localStorage আপডেট
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("pv-theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // ---------- Mobile menu ----------
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  // ---------- Links ----------
  const links = useMemo(() => {
    const base = [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
    ];
    if (session) base.push({ href: "/dashboard/add-product", label: "Add Product" });
    return base;
  }, [session]);

  // Active check ("/" আলাদা করে হ্যান্ডেল)
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const linkClass = (href) =>
    `px-2 py-1 rounded-md transition ${
      isActive(href)
        ? "text-primary font-semibold"
        : "text-base-content/80 hover:text-primary"
    }`;
    const handleLogout = () => {
    signOut({ redirect: false })
    toast.success("Logged out successfully 👋")
    router.push('/login')
  }

  return (
    <nav className="w-full border-b bg-base-100 sticky top-0 z-50">
      {/* top slim bar (screenshot-এর মত) */}
      <div className="h-1 w-full bg-neutral/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* main row */}
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-extrabold tracking-tight">
              Store-<span className="text-primary">Apple</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)} aria-current={isActive(l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            ))}

            {session ? (
              <button onClick={handleLogout} className="text-error hover:underline hover:cursor-pointer">
                Logout
              </button>
            ) : (
              <Link href="/login" className={linkClass("/login")} aria-current={isActive("/login") ? "page" : undefined}>
                Login
              </Link>
            )}

            {/* Icons */}
            <div className="flex items-center gap-4 pl-2">
              

              {/* Theme toggle */}
              <button onClick={toggleTheme} className="btn btn-sm rounded-full">
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile right: icons + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="btn btn-ghost btn-sm rounded-full">
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="btn btn-ghost btn-sm"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 border-t bg-base-100 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block ${linkClass(l.href)}`}
              onClick={closeMenu}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}

          {session ? (
            <button onClick={() => { closeMenu(); handleLogout; }} className="block text-left w-full text-error px-2 py-1 hover:cursor-pointer">
              Logout
            </button>
          ) : (
            <Link href="/login" className={`block hover:cursor-pointer ${linkClass("/login")}`} onClick={closeMenu}>
              Login
            </Link>
          )}

          
        </div>
      </div>
    </nav>
  );
}
