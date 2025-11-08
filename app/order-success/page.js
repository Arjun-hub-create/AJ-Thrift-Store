'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiHome, FiShoppingBag } from 'react-icons/fi';

export default function OrderSuccessPage() {
  const orderNumber = Math.random().toString(36).substring(2, 15).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6"
        >
          <FiCheckCircle className="text-green-600 text-5xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
        >
          Order Placed Successfully!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-lg mb-8"
        >
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="mb-6">
            <p className="text-gray-600 mb-2">Order Number</p>
            <p className="text-2xl font-bold text-green-600">{orderNumber}</p>
          </div>

          <div className="border-t pt-6">
            <p className="text-gray-700 mb-4">
              A confirmation email has been sent to your email address with order details and tracking information.
            </p>
            <p className="text-gray-600 text-sm">
              Expected delivery: 3-5 business days
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiHome />
              Back to Home
            </motion.button>
          </Link>

          <Link href="/category/hoodies">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
            >
              <FiShoppingBag />
              Continue Shopping
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
