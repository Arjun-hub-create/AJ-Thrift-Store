'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';
import { getProductsByCategory } from '../../data/products';

export default function CategoryPage({ params }) {
  const { category } = params;
  const products = getProductsByCategory(category);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  // Get category display name
  const categoryNames = {
    'caps': 'Caps',
    'hoodies': 'Hoodies',
    'joggers': 'Joggers',
    'pants': 'Pants',
    'tshirts': 'T-Shirts',
    'shirts': 'Shirts',
    'women-gym-wear': 'Women Gym Wear',
    'women-kurtha': 'Women Kurtha',
    'women-sarees': 'Women Sarees',
  };

  const categoryName = categoryNames[category] || 'Products';

  // Sort products
  let sortedProducts = [...products];
  if (sortBy === 'price-low') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  // Filter by price range
  if (priceRange === 'under-50') {
    sortedProducts = sortedProducts.filter(p => p.price < 50);
  } else if (priceRange === '50-100') {
    sortedProducts = sortedProducts.filter(p => p.price >= 50 && p.price <= 100);
  } else if (priceRange === 'over-100') {
    sortedProducts = sortedProducts.filter(p => p.price > 100);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {categoryName}
          </h1>
          <p className="text-gray-600 text-lg">
            {sortedProducts.length} products available
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <FiFilter className="text-green-600" />
            <h3 className="font-semibold">Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="under-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="over-100">Over $100</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No products found matching your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/product/${product.id}`}>
                  <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer h-full">
                    <div className="image-zoom-container relative h-64 bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {product.inStock && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          In Stock
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 truncate">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">
                          ${product.price}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
