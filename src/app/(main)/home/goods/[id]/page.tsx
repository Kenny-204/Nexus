"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  Heart,
  Share2,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

interface GoodsDetailsProps {
  title?: string;
  price?: number;
  category?: string;
  condition?: string;
  available?: number;
  images?: string[];
}

const GoodsDetails: React.FC<GoodsDetailsProps> = ({
  title = "Designer Male Slides",
  price = 28000,
  category = "Fashion & Accessories",
  condition = "Brand New",
  available = 10,
  images = [
    "https://via.placeholder.com/600x400?text=Product+1",
    "https://via.placeholder.com/600x400?text=Product+2",
    "https://via.placeholder.com/600x400?text=Product+3",
  ],
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-[var(--color-bg-muted)] flex flex-col">
      {/* Image Carousel */}
      <div className="relative w-full h-72 bg-gray-100 overflow-hidden">
        <img
          src={images[current]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
        />

        {/* Top bar buttons */}
        <div className="absolute top-4 left-4 flex gap-2">
          <button className="bg-white/90 rounded-full p-2 shadow-sm hover:bg-white transition">
            <ChevronLeft size={20} />
          </button>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white/90 rounded-full p-2 shadow-sm hover:bg-white transition">
            <Share2 size={20} />
          </button>
          <button className="bg-white/90 rounded-full p-2 shadow-sm hover:bg-white transition">
            <Heart size={20} />
          </button>
        </div>

        {/* Pagination */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === current ? "bg-[var(--color-primary)]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-1.5 rounded-full"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-1.5 rounded-full"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-t-2xl shadow-sm -mt-4 p-5">
        <h1 className="text-lg font-semibold mb-1">{title}</h1>
        <p className="text-[var(--color-primary)] text-xl font-bold mb-1">
          ₦{price.toLocaleString()}
          <span className="text-sm text-gray-400 font-normal ml-1">
            Best Price
          </span>
        </p>

        {/* Chips */}
        <div className="flex items-center gap-2 mb-4 mt-2">
          <span className="text-xs bg-blue-50 text-[var(--color-primary)] px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full">
            ITEM
          </span>
        </div>

        {/* Item Details */}
        <div className="card p-4 space-y-2">
          <h2 className="font-medium text-[var(--color-text-dark)] mb-2">
            Item Details
          </h2>
          <div className="flex items-center justify-between text-sm">
            <span>Condition</span>
            <div className="flex items-center gap-1 text-green-600 font-medium">
              <CheckCircle size={14} />
              {condition}
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Available</span>
            <span className="font-medium text-[var(--color-text-dark)]">
              {available} items
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Buy Now Button */}
      <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4">
        <button className="btn-primary w-full py-3 text-base">Buy Now</button>
      </div>
    </div>
  );
};

export default GoodsDetails;
