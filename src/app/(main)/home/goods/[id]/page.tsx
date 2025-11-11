"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

// Mock product data
const product = {
  id: 1,
  name: "Bluetooth Speaker",
  images: ["/images/speaker.jpg", "/images/speaker2.jpg"],
  rating: 4.5,
  reviewsCount: 12,
  category: "Electronics",
  hostel: "Mariere",
  description:
    "Portable Bluetooth speaker with high-quality sound, long-lasting battery, and sleek design. Perfect for dorm rooms, parties, and outdoor use.",
};

// Mock seller data
const seller = {
  name: "Kenny's Tech Hub",
  rating: 4.8,
  totalReviews: 24,
  profileImage: "/images/seller.jpg",
  contactLink: "https://wa.me/2348012345678", // WhatsApp link
};

// Mock reviews
const reviews = [
  { id: 1, name: "Ade", rating: 5, comment: "Great speaker, loud and clear!" },
  { id: 2, name: "Chidi", rating: 4, comment: "Good quality but a bit pricey." },
  { id: 3, name: "Tosin", rating: 5, comment: "Love it! Battery lasts long." },
];

// Component
export default function ProductPage() {
  const router = useRouter();

  return (
    <main className="pb-32 px-4">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-gray-700 text-sm font-medium mb-3"
      >
        ← Back
      </button>

      {/* Product Images */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-1">{product.name}</h1>
        <div className="flex items-center gap-2 text-yellow-500 mb-1">
          <Star size={16} fill="currentColor" />
          <span className="text-gray-700 font-medium">{product.rating}</span>
          <span className="text-gray-400 text-sm">({product.reviewsCount} reviews)</span>
        </div>
        <p className="text-gray-500 text-sm mb-1">{product.category}</p>
        <p className="text-gray-500 text-sm mb-1">{product.hostel}</p>
      </div>

      {/* Seller Info */}
      <div className="flex items-center gap-3 mb-4 p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <Image
            src={seller.profileImage}
            alt={seller.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="font-medium">{seller.name}</p>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <Star size={12} fill="currentColor" />
            <span className="text-gray-700">{seller.rating}</span>
            <span className="text-gray-400 text-xs">({seller.totalReviews} reviews)</span>
          </div>
        </div>
        <a
          href={seller.contactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-green-700 transition"
        >
          Contact
        </a>
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <h2 className="font-semibold text-gray-800 mb-2">Description</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>

      {/* Reviews */}
      <div className="mb-32">
        <h2 className="font-semibold text-gray-800 mb-2">Reviews</h2>
        <div className="flex flex-col gap-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-gray-800">{review.name}</p>
                <div className="flex items-center gap-1 text-yellow-500 text-xs">
                  <Star size={12} fill="currentColor" />
                  <span className="text-gray-700">{review.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Contact Seller Button (above BottomNav) */}
      <div className="fixed bottom-16 left-0 w-full p-4 bg-white border-t border-gray-200">
        <a
          href={seller.contactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block bg-green-600 text-white py-3 rounded-2xl font-medium text-center hover:bg-green-700 transition"
        >
          Contact Seller
        </a>
      </div>
    </main>
  );
}

