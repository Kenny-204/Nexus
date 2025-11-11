"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

// Mock goods data
const goods = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    image: "/images/speaker.jpg",
    rating: 4.5,
    hostel: "Mariere",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Study Lamp",
    image: "/images/lamp.jpg",
    rating: 4.8,
    hostel: "Amina",
    category: "Home",
  },
  {
    id: 3,
    name: "Sneakers",
    image: "/images/sneakers.jpg",
    rating: 4.2,
    hostel: "Moremi",
    category: "Fashion",
  },
  {
    id: 4,
    name: "Mini Fan",
    image: "/images/fan.jpg",
    rating: 4.6,
    hostel: "Jaja",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Power Bank",
    image: "/images/powerbank.jpg",
    rating: 4.9,
    hostel: "Eni Njoku",
    category: "Electronics",
  },
];

// Component
export default function GoodsPage() {
  return (
    <main className="pb-16">
      {/* Search Bar (link-style) */}
      <Link
        href="/search"
        className="block mx-4 mt-4 mb-2 rounded-full bg-gray-100 px-4 py-2 text-gray-500 text-sm"
      >
        Search goods…
      </Link>

      {/* Sections */}
      <Section title="Recent Listings" />
      <HorizontalScroll items={goods} />

      <Section title="Best Sellers" />
      <HorizontalScroll items={goods.slice(0, 3)} />

      <Section title="Nearby Goods" />
      <HorizontalScroll items={goods.slice(2)} />

      <Section title="Deals & Discounts" />
      <HorizontalScroll items={goods.slice(1, 4)} />
    </main>
  );
}

// Section Title
function Section({ title }: { title: string }) {
  return (
    <h2 className="text-lg font-semibold mt-6 mb-2 px-4 text-gray-800">
      {title}
    </h2>
  );
}

// Product Scroller
function HorizontalScroll({ items }: { items: typeof goods }) {
  return (
    <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar py-2">
      {items.map((item) => (
        <Link
          href={`/goods/${item.id}`}
          key={item.id}
          className="min-w-[160px] bg-white rounded-2xl shadow-md border border-gray-100 flex-shrink-0 hover:shadow-lg transition-shadow"
        >
          <div className="relative w-full h-36 rounded-t-2xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <p className="text-sm font-medium truncate">{item.name}</p>
            <div className="flex items-center gap-1 text-yellow-500 text-xs">
              <Star size={12} fill="currentColor" />
              <span className="text-gray-700">{item.rating}</span>
            </div>
            <p className="text-[11px] text-gray-500">{item.hostel}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
