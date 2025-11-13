"use client";

import { useState } from "react";
import { Search, Heart } from "lucide-react";
import Link from "next/link";

const mockGoods = [
  {
    id: 1,
    name: "Designer Male Slides",
    price: 28000,
    hostel: "Unilag",
    image: "fan.webp",
    tag: "Item",
  },
  {
    id: 2,
    name: "Stainless Steel Necklace & Earrings Set",
    price: 3000,
    hostel: "Unilag",
    image: "fan.webp",
    tag: "Item",
  },
  {
    id: 3,
    name: "Two Piece Available",
    price: 12000,
    hostel: "Unilag",
    image: "/twopiece.jpg",
  },
  {
    id: 4,
    name: "Stock Jeans Available",
    price: 15000,
    hostel: "Unilag",
    image: "/jeans.jpg",
  },
];

export default function GoodsPage() {
  const [query, setQuery] = useState("");

  const filteredGoods = mockGoods.filter((g) =>
    g.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="min-h-[100dvh] bg-[var(--color-bg-muted)] p-4 pb-24 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, services, jobs..."
          className="w-full bg-white rounded-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-sm"
        />
      </div>

      {/* Categories */}
      <div className="flex justify-between text-center text-sm">
        <Link href="#" className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
            <img src="/icons/gadgets.svg" className="w-6 h-6" alt="" />
          </div>
          <p>Gadgets</p>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
            <img src="/icons/fashion.svg" className="w-6 h-6" alt="" />
          </div>
          <p>Fashion</p>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
            <img src="/icons/services.svg" className="w-6 h-6" alt="" />
          </div>
          <p>Services</p>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
            <img src="/icons/more.svg" className="w-6 h-6" alt="" />
          </div>
          <p>More</p>
        </Link>
      </div>

      {/* Recommended Section */}
      <section>
        <h2 className="text-base font-semibold flex items-center gap-2 mb-3">
          <Heart
            size={16}
            className="text-[var(--color-primary)] fill-[var(--color-primary)]"
          />
          Recommended for you
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {filteredGoods.map((item) => (
            <Link
              href={`goods/${item.id}`}
              key={item.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="relative w-full h-32">
                <img
                  src="fan.webp"
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.tag && (
                  <span className="absolute top-2 right-2 bg-[var(--color-primary)] text-white text-xs px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-3 space-y-1">
                <p className="text-sm font-medium leading-tight">{item.name}</p>
                <p className="text-[var(--color-primary)] font-semibold text-sm">
                  ₦{item.price.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">
                  {item.hostel && (
                    <>
                      <span className="font-semibold text-[var(--color-primary)]">
                        {item.hostel}
                      </span>{" "}
                      • Unilag
                    </>
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
