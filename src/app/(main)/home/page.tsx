import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-muted)] flex flex-col items-center justify-center gap-6 p-6 lg:flex-row lg:p-10">
      {/* Goods Card */}
      <div className="w-full lg:w-1/2">
        <div className="card hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col justify-between h-48">
          <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
            Goods
          </h2>
          <p className="text-sm text-[var(--color-text-light)]">
            Explore physical products, items, and deals near you.
          </p>
          <Link
            href="/home/goods"
            className="btn-primary mt-4 text-sm px-5 py-2"
          >
            View Goods
          </Link>
        </div>
      </div>

      {/* Services Card */}
      <div className="w-full lg:w-1/2">
        <div className="card hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col justify-between h-48">
          <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
            Services
          </h2>
          <p className="text-sm text-[var(--color-text-light)]">
            Find people offering professional or freelance services.
          </p>
          <Link
            href="/home/services"
            className="btn-primary mt-4 text-sm px-5 py-2"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}
