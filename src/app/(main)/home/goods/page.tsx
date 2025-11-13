import { Search, Smartphone, Shirt, Briefcase, Grid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { icon: Smartphone, label: "Gadgets" },
  { icon: Shirt, label: "Fashion" },
  { icon: Briefcase, label: "Accessories" },
  { icon: Grid, label: "More" },
];

const recommended = [
  {
    id: 1,
    title: "Designer Male Slides",
    price: "₦28,000",
    image: "/images/slides.jpg",
    location: "Unilag",
    tag: "ITEM",
  },
  {
    id: 2,
    title: "Stainless Steel Necklace & Earrings Set",
    price: "₦3,000",
    image: "/images/necklace.jpg",
    location: "Unilag",
    tag: "ITEM",
  },
];

const featured = [
  { id: 3, title: "Two Piece Available", price: "₦12,000" },
  { id: 4, title: "Stock Jeans Available", price: "₦15,000" },
];

export default function Page() {
  return (
    <main className="pb-20">
      {/* Top Nav / Header */}
      <header className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-blue-600">Campora</h1>
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

      {/* Search Bar */}
      <div className="px-4">
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
          <div
            key={label}
            className="flex flex-col items-center text-sm text-gray-600"
          >
            <div className="p-3 rounded-full bg-blue-50 text-blue-600">
              <Icon size={20} />
            </div>
            <p className="mt-1">{label}</p>
          </div>
        ))}
      </section>

      {/* Recommended */}
      <section className="mt-8 px-4">
        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
          <span className="text-blue-600">♥</span> Recommended for you
        </h2>

        <div className="flex gap-4 overflow-x-auto mt-4 pb-2">
          {recommended.map((item) => (
            <Link
              href={`/goods/${item.id}`}
              key={item.id}
              className="min-w-[180px] bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={120}
                  className="object-cover w-full h-32"
                />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-md">
                  {item.tag}
                </span>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-800 truncate">
                  {item.title}
                </h3>
                <p className="text-blue-600 text-sm font-medium">
                  {item.price}
                </p>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mt-8 px-4">
        <h2 className="font-semibold text-gray-800">Featured Listings</h2>
        <div className="flex gap-4 overflow-x-auto mt-4 pb-2">
          {featured.map((item) => (
            <div
              key={item.id}
              className="min-w-[150px] bg-white rounded-xl shadow-sm p-3"
            >
              <h3 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-blue-600 text-sm font-medium">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Listings */}
      <section className="mt-8 px-4 mb-20">
        <h2 className="font-semibold text-gray-800">New Listings</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-3 h-40 flex flex-col justify-between"
            >
              <div className="bg-gray-100 h-24 rounded-lg"></div>
              <h3 className="text-sm font-semibold text-gray-800">
                Product {i + 1}
              </h3>
              <p className="text-blue-600 text-sm font-medium">₦{i + 1}0,000</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
