"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface Listing {
  id: number;
  title: string;
  price: string;
  image: string;
}

const CurrentUserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"listings" | "reviews" | "settings">(
    "listings"
  );
  const [verified, setVerified] = useState(false);

  const user = {
    name: "Kenny Giwa",
    avatar: "/fan.webp",
    bio: "Student and developer at Wild Fusion.",
    isStudent: true,
    rating: 4.5,
    stats: { listings: 5, followers: 200, reviews: 12 },
    listings: [
      { id: 1, title: "Designer Slides", price: "₦28,000", image: "/fan.webp" },
      { id: 2, title: "Leather Bag", price: "₦18,000", image: "/fan.webp" },
      { id: 3, title: "Casual Sneakers", price: "₦20,000", image: "/fan.webp" },
    ],
  };

  const handleVerify = () => {
    // Simulate verification process
    alert("Redirecting to verification process...");
    setVerified(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow p-5 flex flex-col items-center space-y-2">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-600">
          <Image src={user.avatar} alt={user.name} width={96} height={96} />
        </div>
        <h1 className="text-xl font-semibold">{user.name}</h1>

        {/* Badges */}
        <div className="flex gap-2">
          {user.isStudent && (
            <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
              Student
            </span>
          )}
          {verified ? (
            <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full font-medium">
              Verified
            </span>
          ) : (
            <button
              onClick={handleVerify}
              className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full font-medium hover:bg-red-100 transition"
            >
              Not Verified
            </button>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.round(user.rating) ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">{user.rating.toFixed(1)} / 5</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-3">
          <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
            Edit Profile
          </button>
          <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
            Add Listing
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mt-4">
          <div className="text-center">
            <p className="font-semibold">{user.stats.listings}</p>
            <span className="text-gray-500 text-sm">Listings</span>
          </div>
          <div className="text-center">
            <p className="font-semibold">{user.stats.followers}</p>
            <span className="text-gray-500 text-sm">Followers</span>
          </div>
          <div className="text-center">
            <p className="font-semibold">{user.stats.reviews}</p>
            <span className="text-gray-500 text-sm">Reviews</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white mt-4 p-4 flex gap-4 border-b border-gray-200">
        {["listings", "reviews", "settings"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            } transition`}
            onClick={() => setActiveTab(tab as "listings" | "reviews" | "settings")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 space-y-4">
        {activeTab === "listings" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {user.listings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow overflow-hidden hover:shadow-md transition"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={120}
                  className="w-full h-32 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold truncate">{item.title}</h3>
                  <p className="text-blue-600 text-sm font-medium">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-sm text-gray-500">No reviews yet.</div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Bio
              </label>
              <textarea
                defaultValue={user.bio}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentUserProfile;
