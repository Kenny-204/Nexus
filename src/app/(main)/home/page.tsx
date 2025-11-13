import Link from "next/link";
import { Package, Briefcase } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-muted)] flex flex-col items-center justify-center gap-6 p-6 lg:flex-row lg:p-10">
      {/* Goods Card */}
      <Link
        href="/home/goods"
        className="group w-full lg:w-1/2 transform transition-all duration-300 hover:-translate-y-1"
      >
        <div className="card flex flex-col justify-between h-48 p-8 relative overflow-hidden">
          {/* Accent glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-[var(--color-primary)]/10 rounded-full blur-2xl group-hover:blur-3xl transition" />

          <div className="flex items-center gap-3">
            <div className="bg-[var(--color-primary)]/10 p-3 rounded-xl text-[var(--color-primary)]">
              <Package size={24} />
            </div>
            <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
              Goods
            </h2>
          </div>

          <p className="text-sm text-[var(--color-text-light)] mt-3">
            Explore physical products, items, and deals near you.
          </p>

          <button className="btn-primary mt-5 text-sm px-5 py-2 self-start">
            View Goods
          </button>
        </div>
      </Link>

      {/* Services Card */}
      <Link
        href="/home/services"
        className="group w-full lg:w-1/2 transform transition-all duration-300 hover:-translate-y-1"
      >
        <div className="card flex flex-col justify-between h-48 p-8 relative overflow-hidden">
          {/* Accent glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-[var(--color-primary)]/10 rounded-full blur-2xl group-hover:blur-3xl transition" />

          <div className="flex items-center gap-3">
            <div className="bg-[var(--color-primary)]/10 p-3 rounded-xl text-[var(--color-primary)]">
              <Briefcase size={24} />
            </div>
            <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
              Services
            </h2>
          </div>

          <p className="text-sm text-[var(--color-text-light)] mt-3">
            Find people offering professional or freelance services.
          </p>

          <button className="btn-primary mt-5 text-sm px-5 py-2 self-start">
            View Services
          </button>
        </div>
      </Link>
    </main>
  );
}
