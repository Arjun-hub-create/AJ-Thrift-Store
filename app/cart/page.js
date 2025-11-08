'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleQuantityChange = (productId, size, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
      updateQuantity(productId, size, newQuantity);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full mb-6">
            <FiShoppingBag className="text-gray-400 text-4xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Start shopping to add items to your cart!
          </p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              Start Shopping
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-lg">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.size}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Product Image */}
                      <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <Link href={`/product/${item.id}`}>
                            <h3 className="text-xl font-semibold hover:text-green-600 transition-colors mb-2">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-gray-600 mb-2">Size: {item.size}</p>
                          <p className="text-2xl font-bold text-green-600">
                            ${item.price}
                          </p>
                        </div>

                        {/* Quantity Controls & Remove */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() =>
                                handleQuantityChange(item.id, item.size, item.quantity, -1)
                              }
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                            >
                              <FiMinus />
                            </motion.button>

                            <span className="text-lg font-semibold w-8 text-center">
                              {item.quantity}
                            </span>

                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() =>
                                handleQuantityChange(item.id, item.size, item.quantity, 1)
                              }
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                            >
                              <FiPlus />
                            </motion.button>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-red-500 hover:text-red-700 transition-colors p-2"
                          >
                            <FiTrash2 size={20} />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {getCartTotal() >= 50 ? 'FREE' : '$5.99'}
                  </span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Tax (8%)</span>
                  <span className="font-semibold">
                    ${(getCartTotal() * 0.08).toFixed(2)}
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-green-600">
                      ${(
                        getCartTotal() +
                        (getCartTotal() >= 50 ? 0 : 5.99) +
                        getCartTotal() * 0.08
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {getCartTotal() < 50 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-green-700">
                    Add ${(50 - getCartTotal()).toFixed(2)} more to get FREE shipping!
                  </p>
                </div>
              )}

              <Link href="/checkout">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-green-600 text-white rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Proceed to Checkout
                  <FiArrowRight />
                </motion.button>
              </Link>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 mt-4 border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-colors"
                >
                  Continue Shopping
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
