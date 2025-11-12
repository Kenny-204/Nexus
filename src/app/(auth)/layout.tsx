export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen  items-center justify-center bg-gray-50">
        <main className="w-full">
          <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg-muted)] px-4">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <div className="text-white bg-[var(--color-primary)] rounded-md px-2 py-1 font-bold text-lg">
                e
              </div>
              <span className="text-[var(--color-primary)] font-semibold text-lg">
                Nexus
              </span>
            </div>

            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
