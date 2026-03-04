# 🛒 Full-Stack E-Commerce Project — Next.js + Node.js + MongoDB

A **production-ready full-stack e-commerce platform** built using:

> **Frontend:** Next.js (React), TailwindCSS, Framer Motion  
> **Backend:** Node.js + Express  
> **Database:** MongoDB (Mongoose)  
> **Payments:** Stripe Checkout  
> **Storage:** AWS S3 (for product images)  
> **Auth:** JWT (with HttpOnly cookies)  
> **Deployment:** Vercel (frontend), Render/Railway (backend), MongoDB Atlas (database)

---

## 🚀 Project Goal
Create a **real-world e-commerce store** that allows users to:
- Browse products  
- Add to cart  
- Checkout securely with Stripe  
- View order history  
- Admins can manage products and orders  

---

## 🧱 Tech Stack
| Layer | Tech |
|-------|------|
| Frontend | Next.js (React), TailwindCSS, Framer Motion |
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |
| Authentication | JWT + bcrypt |
| File Uploads | AWS S3 or DigitalOcean Spaces |
| Payments | Stripe Checkout + Webhooks |
| Dev Tools | Docker, ESLint, Prettier, Husky, GitHub Actions CI |
| Deployment | Vercel (web) + Render/Railway (API) + MongoDB Atlas |

---

## 📁 Project Structure
AJ-Thrift-Store
│
├── app/ # Next.js app router pages
├── lib/ # Utility functions and helpers
├── models/ # MongoDB models
├── public/ # Static assets
│
├── middleware.js # Auth and route middleware
├── next.config.js # Next.js configuration
├── package.json # Project dependencies
├── tailwind.config.js # TailwindCSS configuration
└── README.md # Project documentation

