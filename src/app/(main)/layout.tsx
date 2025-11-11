import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header>
          <TopNav />
        </header>
        <main className="min-h-screen bg-gray-50 text-gray-900">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>{" "}
        <BottomNav />
      </body>
    </html>
  );
}
