// app/(auth)/forgot-password/page.tsx
"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
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

        {/* Submit */}
        <button type="submit" className="btn-primary w-full mt-2">
          Login
        </button>
      </form>
    </div>
  );
}
