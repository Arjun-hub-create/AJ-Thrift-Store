'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiCheck, FiArrowLeft } from 'react-icons/fi';
import { getProductById, getProductsByCategory } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function ProductPage({ params }) {
  const { id } = params;
  const product = getProductById(id);
  const router = useRouter();
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link href="/">
            <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    addToCart(product, selectedSize);
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <FiArrowLeft />
            <span>Back</span>
          </button>
        </motion.div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-white shadow-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-green-600">
                  ${product.price}
                </span>
                {product.inStock && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    <FiCheck />
                    In Stock
                  </span>
                )}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-600'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all ${
                  addedToCart
                    ? 'bg-green-700 text-white'
                    : product.inStock
                    ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {addedToCart ? (
                  <>
                    <FiCheck size={24} />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <FiShoppingCart size={24} />
                    Add to Cart
                  </>
                )}
              </motion.button>

              <Link href="/cart">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-semibold text-lg border-2 border-green-600 text-green-600 hover:bg-green-50 transition-all"
                >
                  View Cart
                </motion.button>
              </Link>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-xl p-6 shadow-md space-y-3">
              <h3 className="text-xl font-semibold mb-4">Product Details</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Category:</span> {product.category}</p>
                <p><span className="font-semibold">Available Sizes:</span> {product.sizes.join(', ')}</p>
                <p><span className="font-semibold">Material:</span> Premium Quality Fabric</p>
                <p><span className="font-semibold">Care:</span> Machine Washable</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8"
            >
              You May Also Like
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/product/${relatedProduct.id}`}>
                    <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer">
                      <div className="image-zoom-container relative h-64 bg-gray-100">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 truncate">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-green-600">
                            ${relatedProduct.price}
                          </span>
                          <span className="text-sm text-gray-600">View</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
