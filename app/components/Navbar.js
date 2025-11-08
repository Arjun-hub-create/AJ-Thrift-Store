'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiShoppingCart, FiMenu, FiX, FiSearch, FiUser, FiLogOut } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const categories = [
  { name: 'Caps', href: '/category/caps' },
  { name: 'Hoodies', href: '/category/hoodies' },
  { name: 'Joggers', href: '/category/joggers' },
  { name: 'Pants', href: '/category/pants' },
  { name: 'T-Shirts', href: '/category/tshirts' },
  { name: 'Women Gym Wear', href: '/category/women-gym-wear' },
  { name: 'Women Kurtha', href: '/category/women-kurtha' },
  { name: 'Women Sarees', href: '/category/women-sarees' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { getCartCount } = useCart();
  const { user, logout, isLoading } = useAuth();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <motion.span 
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent whitespace-nowrap"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
                style={{ 
                  backgroundSize: '200% 200%'
                }}
              >
                AJ&apos;S Thrift Store
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-4 xl:space-x-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.href}>
                <motion.span
                  whileHover={{ scale: 1.1, color: '#16a34a' }}
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer whitespace-nowrap"
                >
                  {category.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Search Icon */}
            <Link href="/search">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:block text-gray-700 hover:text-green-600"
              >
                <FiSearch size={24} />
              </motion.button>
            </Link>

            {/* Cart Icon */}
            <Link href="/cart">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative cursor-pointer"
              >
                <FiShoppingCart size={24} className="text-gray-700 hover:text-green-600" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center cart-badge"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* User Account */}
            {user && user.name ? (
              <div className="relative hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-green-600"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                </motion.button>
                
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-700">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 flex items-center space-x-2"
                      >
                        <FiLogOut size={16} />
                        <span>Logout</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link href="/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg"
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={category.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="block py-2 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors font-medium">
                        {category.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Auth Section */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  {user && user.name ? (
                    <div className="space-y-2">
                      <div className="px-4 py-2">
                        <p className="text-sm font-semibold text-gray-700">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left py-2 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors font-medium flex items-center space-x-2"
                      >
                        <FiLogOut size={18} />
                        <span>Logout</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                        <span className="block py-2 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors font-medium">
                          Login
                        </span>
                      </Link>
                      <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                        <span className="block py-2 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-colors font-medium text-center">
                          Sign Up
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
