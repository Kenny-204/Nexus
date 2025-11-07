import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <TopNav />
        </header>

        {children}
        <BottomNav />
      </body>
    </html>
  );
}
