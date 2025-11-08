'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />
      
      {/* Large floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full opacity-20 blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-20 w-[32rem] h-[32rem] bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-20 blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-200 to-green-200 rounded-full opacity-15 blur-3xl"
      />
      
      {/* Smaller floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
          className="absolute rounded-full bg-gradient-to-r from-green-400 to-emerald-400 blur-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(22,163,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  );
}
