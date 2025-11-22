import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <main className="flex-1 bg-gray-50 text-gray-900 pb-[62px]">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
      <BottomNav />
    </>
  );
}
