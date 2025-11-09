// app/(auth)/login/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-blue-50 lg:bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-screen sm:h-auto sm:max-w-sm bg-white sm:rounded-2xl sm:shadow-lg p-6 flex flex-col justify-center"
      >
        <h1 className="text-2xl font-semibold text-center mb-6">
          Welcome Back
        </h1>
        <form className="space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-blue-600">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
