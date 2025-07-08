"use client";

import type React from "react";
import {
  FiShoppingCart,
  FiSearch,
  FiGrid,
  FiList,
  FiStar,
  FiHeart,
} from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

const ShopContent: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "375 Reorder Package",
      price: 250.0,
      originalPrice: 300.0,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      category: "packages",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      badge: "Popular",
    },
    {
      id: 2,
      name: "1.5 Reorder Premium",
      price: 1000.0,
      originalPrice: 1200.0,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      category: "premium",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      badge: "Best Seller",
    },
    {
      id: 3,
      name: "1.5 Reorder Basic",
      price: 9.33,
      originalPrice: 15.0,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "basic",
      rating: 4.5,
      reviews: 67,
      inStock: true,
      badge: "Sale",
    },
    {
      id: 4,
      name: "Emiral Elixir 50cl",
      price: 10.0,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
      category: "elixirs",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      badge: null,
    },
    {
      id: 5,
      name: "5 Product Bundle 75cl",
      price: 65.0,
      originalPrice: 85.0,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "bundles",
      rating: 4.6,
      reviews: 203,
      inStock: true,
      badge: "Bundle",
    },
    {
      id: 6,
      name: "3 Product Bundle 75cl",
      price: 39.0,
      originalPrice: 50.0,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      category: "bundles",
      rating: 4.4,
      reviews: 98,
      inStock: true,
      badge: "Value Pack",
    },
    {
      id: 7,
      name: "Emiral Ulcer Elixir 75cl",
      price: 13.0,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop",
      category: "elixirs",
      rating: 4.8,
      reviews: 145,
      inStock: false,
      badge: "Out of Stock",
    },
    {
      id: 8,
      name: "Premium Health Bundle",
      price: 120.0,
      originalPrice: 150.0,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      category: "premium",
      rating: 4.9,
      reviews: 78,
      inStock: true,
      badge: "New",
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "packages", name: "Packages" },
    { id: "premium", name: "Premium" },
    { id: "basic", name: "Basic" },
    { id: "elixirs", name: "Elixirs" },
    { id: "bundles", name: "Bundles" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
    // Add your cart logic here
  };

  return (
    <div className="space-y-8">
      {/* Shop Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop</h1>
            <p className="text-gray-600">
              Discover our premium products and exclusive deals.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 bg-[#29c231] text-white px-4 py-2 rounded-lg">
              <FiShoppingCart className="w-5 h-5" />
              <span className="font-medium">0 items</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29c231] focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29c231] focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === "grid"
                    ? "bg-white text-[#29c231] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === "list"
                    ? "bg-white text-[#29c231] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 group"
          >
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                    product.badge === "Sale"
                      ? "bg-red-100 text-red-800"
                      : product.badge === "New"
                      ? "bg-green-100 text-green-800"
                      : product.badge === "Popular"
                      ? "bg-blue-100 text-blue-800"
                      : product.badge === "Best Seller"
                      ? "bg-purple-100 text-purple-800"
                      : product.badge === "Out of Stock"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {product.badge}
                </div>
              )}

              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50">
                <FiHeart className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product.id)}
                disabled={!product.inStock}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  product.inStock
                    ? "bg-[#29c231] text-white hover:bg-green-600"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                {product.inStock ? (
                  <div className="flex items-center justify-center gap-2">
                    <FiShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </div>
                ) : (
                  "Out of Stock"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiShoppingCart className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        </div>
      )}

      {/* Load More Button */}
      {filteredProducts.length > 0 && (
        <div className="text-center">
          <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopContent;
