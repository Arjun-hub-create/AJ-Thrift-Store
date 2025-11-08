'use client';

import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                AJ&apos;S Thrift Store
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Your one-stop destination for premium quality thrift fashion. 
                We offer carefully curated collections at unbeatable prices.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.2, color: '#4ade80' }}
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FiFacebook size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: '#4ade80' }}
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FiInstagram size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: '#4ade80' }}
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FiTwitter size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: '#4ade80' }}
                  href="mailto:contact@ajsthrift.com"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FiMail size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="text-gray-400 hover:text-green-400 transition-colors">
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link href="/checkout" className="text-gray-400 hover:text-green-400 transition-colors">
                    Checkout
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@ajsthrift.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Hours: Mon-Sat 9AM-8PM</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; {currentYear} AJ&apos;S Thrift Store. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
