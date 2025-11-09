export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full items-center justify-center bg-gray-50">
        {children}
      </body>
    </html>
  );
}
