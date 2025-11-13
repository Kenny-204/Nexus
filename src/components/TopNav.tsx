import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="max-lg:hidden lg:flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-[var(--color-primary)] text-white font-bold rounded-md px-2 py-1 text-lg">
          e
        </div>
        <span className="text-[var(--color-primary)] font-semibold text-lg">
          CAMPORA
        </span>
      </div>

      {/* Nav Links */}
      <ul className="flex items-center gap-6 text-[var(--color-text-dark)] font-medium">
        <li>
          <Link
            href="/"
            className="hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            Messages
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            Profile
          </Link>
        </li>
      </ul>

      {/* Auth / CTA */}
      <div>
        <Link
          href="/login"
          className="btn-primary px-6 py-2 text-sm font-semibold shadow-sm"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
