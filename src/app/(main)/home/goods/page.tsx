import { Search, Smartphone, Shirt, Briefcase, Grid, Star, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { icon: Smartphone, label: "Gadgets" },
  { icon: Shirt, label: "Fashion" },
  { icon: Briefcase, label: "Accessories" },
  { icon: Grid, label: "More" },
];

const recommended = [
  { id: 1, title: "Designer Male Slides", price: "₦28,000", image: "/fan.webp", hostel: "Jaja", tag: "ITEM" },
  { id: 2, title: "Stainless Steel Necklace & Earrings Set", price: "₦3,000", image: "/fan.webp", hostel: "Ogun", tag: "ITEM" },
];

const featured = [
  { id: 3, title: "Two Piece Available", price: "₦12,000", image: "/fan.webp", hostel: "Yaba", tag: "FEATURED" },
  { id: 4, title: "Stock Jeans Available", price: "₦15,000", image: "/fan.webp", hostel: "Baba-Tunde", tag: "FEATURED" },
];

const newListings = [
  { id: 5, title: "Casual Sneakers", price: "₦20,000", image: "/fan.webp", hostel: "Jaja", tag: "NEW" },
  { id: 6, title: "Leather Bag", price: "₦18,000", image: "/fan.webp", hostel: "Ogun", tag: "NEW" },
  { id: 7, title: "Smartwatch Series 5", price: "₦45,000", image: "/fan.webp", hostel: "Yaba", tag: "NEW" },
  { id: 8, title: "Denim Jacket", price: "₦22,000", image: "/fan.webp", hostel: "Baba-Tunde", tag: "NEW" },
];

export default function Page() {
  const renderCard = (item: typeof recommended[0]) => (
    <Link
      href={`goods/${item.id}`}
      key={item.id}
      className="flex-shrink-0 w-48 bg-white rounded-xl shadow-sm overflow-hidden snap-start"
    >
      <div className="relative">
        <Image
          src={item.image}
          alt={item.title}
          width={192}
          height={120}
          className="object-cover w-full h-32"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-md">
          {item.tag}
        </span>
      </div>
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-800 truncate">{item.title}</h3>
        <p className="text-blue-600 text-sm font-medium">{item.price}</p>
        <p className="text-xs text-gray-500">{item.hostel}</p>
      </div>
    </Link>
  );

  const renderGridCard = (item: typeof featured[0]) => (
    <Link
      href={`/goods/${item.id}`}
      key={item.id}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="relative">
        <Image
          src={item.image}
          alt={item.title}
          width={192}
          height={120}
          className="object-cover w-full h-32"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-md">
          {item.tag}
        </span>
      </div>
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-800 truncate">{item.title}</h3>
        <p className="text-blue-600 text-sm font-medium">{item.price}</p>
        <p className="text-xs text-gray-500">{item.hostel}</p>
      </div>
    </Link>
  );

  return (
    <main className="pb-20">
      {/* Mobile Header */}
      <header className="flex items-center justify-between p-4 md:hidden">
        <h1 className="text-xl font-bold text-blue-600">Nexus</h1>
        <button className="p-2 rounded-full bg-blue-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.081a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.917a6 6 0 10-12 0v.917a8.967 8.967 0 01-2.311 6.02c1.74.68 3.563 1.12 5.454 1.31m5.714 0a23.848 23.848 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>
      </header>

      {/* Search */}
      <div className="px-4 mt-4">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full p-3">
          <Search className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search products, services, jobs..."
            className="bg-transparent outline-none flex-1 text-sm"
          />
        </div>
      </div>

      {/* Categories */}
      <section className="flex justify-between px-6 mt-6">
        {categories.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-sm text-gray-600">
            <div className="p-3 rounded-full bg-blue-50 text-blue-600">
              <Icon size={20} />
            </div>
            <p className="mt-1">{label}</p>
          </div>
        ))}
      </section>

      {/* Recommended (horizontal scroll) */}
      <section className="mt-8 px-4">
        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
          <Heart className="text-blue-600" size={18} /> Recommended for you
        </h2>
        <div className="flex gap-4 overflow-x-auto mt-4 pb-2 snap-x snap-mandatory">
          {recommended.map(renderCard)}
        </div>
      </section>

      {/* New Listings (grid) */}
      <section className="mt-8 px-4">
        <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <Star className="text-blue-600" size={20} /> New Listings
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {newListings.map(renderGridCard)}
        </div>
      </section>

      {/* Featured Listings (grid) */}
      <section className="mt-8 px-4 mb-20">
        <h2 className="font-semibold text-gray-800 mb-4">Featured Listings</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {featured.map(renderGridCard)}
        </div>
      </section>
    </main>
  );
}
