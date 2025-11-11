export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen  items-center justify-center bg-gray-50">
        <main className="w-full">
        {children}
        </main>
      </body>
    </html>
  );
}
