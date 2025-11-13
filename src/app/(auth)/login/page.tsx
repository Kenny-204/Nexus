"use client";

import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // simulate login
    setTimeout(() => setLoading(false), 1500);
  }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {/* Card */}
      <div className="card w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form className="space-y-4">
          {/* Full Name */}

          {/* Email */}
          <div className="relative">
            <Mail
              className="absolute left-4 top-3.5 text-[var(--color-primary)]"
              size={20}
            />
            <input
              type="email"
              placeholder="Email"
              className="input pl-12"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              className="absolute left-4 top-3.5 text-[var(--color-primary)]"
              size={20}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input pl-12 pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit */}
          <button type="submit" className="btn-primary w-full mt-2">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-200" />
          <span className="mx-2 text-sm text-gray-400">or</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        {/* Google Sign Up */}
        <button
          type="button"
          className="btn-ghost w-full flex items-center justify-center gap-2"
        >
          <img src="google-color.svg" alt="Google" className="w-5 h-5" />
          <span>Sign up with Google</span>
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-[var(--color-text-light)] mt-6">
          Are you new?{" "}
          <Link href="/signup" className="font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
