"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  Heart,
  Share2,
  ChevronRight,
  CheckCircle,
  Star,
} from "lucide-react";

interface GoodsDetailsProps {
  title?: string;
  price?: number;
  category?: string;
  condition?: string;
  available?: number;
  images?: string[];
  hostel?: string;
  description?: string;
  rating?: number; // rating for the product itself
  seller?: {
    name: string;
    avatar: string;
    rating?: number;
    totalListings?: number;
  };
}

const GoodsDetails: React.FC<GoodsDetailsProps> = ({
  title = "Designer Male Slides",
  price = 28000,
  category = "Fashion & Accessories",
  condition = "Brand New",
  available = 10,
  images = ["/fan.webp", "/fan.webp", "/fan.webp"],
  hostel = "Jaja",
  description = "Color: Black, Size: 42, Material: Leather",
  rating = 4.5,
  seller = {
    name: "John Doe",
    avatar: "/fan.webp",
    rating: 4.8,
    totalListings: 15,
  },
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"details" | "seller" | "reviews">(
    "details"
  );

  const nextSlide = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Image Carousel */}
      <div className="relative w-full h-72 bg-gray-100 overflow-hidden">
        <img
          src={images[currentImage]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
        />

        {/* Top bar buttons */}
        <div className="absolute top-4 left-4 flex gap-2">
          <button className="bg-white/90 rounded-full p-2 shadow hover:bg-white transition">
            <ChevronLeft size={20} />
          </button>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white/90 rounded-full p-2 shadow hover:bg-white transition">
            <Share2 size={20} />
          </button>
          <button className="bg-white/90 rounded-full p-2 shadow hover:bg-white transition">
            <Heart size={20} />
          </button>
        </div>

        {/* Pagination */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentImage ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-1.5 rounded-full shadow"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-1.5 rounded-full shadow"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-t-2xl shadow-sm -mt-4 p-5 space-y-4">
        <h1 className="text-lg font-semibold">{title}</h1>

        {/* Product Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">{rating.toFixed(1)} / 5</span>
        </div>

        <p className="text-[var(--color-primary)] text-xl font-bold mb-2">
          ₦{price.toLocaleString()}
          <span className="text-sm text-gray-400 font-normal ml-1">Best Price</span>
        </p>

        {/* Chips */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full">
            ITEM
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-200 mb-4">
          {["details", "seller", "reviews"].map((tab) => (
            <button
              key={tab}
              className={`pb-2 font-medium ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              } transition`}
              onClick={() => setActiveTab(tab as "details" | "seller" | "reviews")}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "details" && (
          <div className="space-y-3">
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
            <div className="flex items-center justify-between text-sm">
              <span>Location</span>
              <span className="font-medium text-[var(--color-text-dark)]">{hostel}</span>
            </div>
            <div className="text-sm mt-2">
              <span className="font-medium">Description: </span>
              <span>{description}</span>
            </div>
          </div>
        )}

        {activeTab === "seller" && (
          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
            <img
              src={seller.avatar}
              alt={seller.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold">{seller.name}</p>
              {seller.rating && (
                <p className="text-sm text-gray-500">{seller.rating} ★ rating</p>
              )}
              {seller.totalListings && (
                <p className="text-sm text-gray-500">{seller.totalListings} listings</p>
              )}
            </div>
            <button className="text-blue-600 text-sm font-medium border border-blue-600 px-3 py-1 rounded hover:bg-blue-50">
              Message
            </button>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-sm text-gray-500">
            No reviews yet.
          </div>
        )}
      </div>

      {/* Bottom Buy Now Button */}
      <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4">
        <button className="btn-primary w-full py-3 text-base">Buy Now</button>
      </div>
    </div>
  );
};

export default GoodsDetails;
