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
        <main className="flex-1">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
