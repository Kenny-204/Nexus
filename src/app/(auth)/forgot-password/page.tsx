// app/(auth)/forgot-password/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // simulate sending reset email
    setTimeout(() => {
      setLoading(false);
      setEmailSent(true);
    }, 1500);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:max-w-md lg:max-w-md"
      >
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Forgot Password
        </h1>
        <p className="mt-1 text-center text-gray-500 text-sm">
          Enter your email to reset your password
        </p>

        {emailSent ? (
          <p className="mt-6 text-center text-green-600 text-sm">
            Password reset link sent! Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-700 focus:ring-0"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-black py-2 text-white text-sm font-medium transition hover:bg-gray-900 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link href="/auth/login" className="text-gray-900 font-medium">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
