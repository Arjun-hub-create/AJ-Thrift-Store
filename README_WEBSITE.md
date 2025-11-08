# AJ'S Thrift Store - E-Commerce Website

A modern, fully functional e-commerce website built with Next.js, React, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern & Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations**: High-tech animations using Framer Motion
- **Product Categories**: Separate sections for Caps, Hoodies, Joggers, Pants, T-Shirts, Shirts, Women Gym Wear, Women Kurtha, and Women Sarees
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Size Selection**: Choose sizes for each product
- **Checkout System**: Complete checkout flow with form validation
- **Product Filters**: Sort by price and filter by price range
- **Image Zoom Effects**: Hover effects on product images
- **Fully Functional**: Ready for deployment

## 📦 Installation

1. **Install Dependencies**
```powershell
npm install
```

2. **Run Development Server**
```powershell
npm run dev
```

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```powershell
npm run build
npm start
```

## 📱 Responsive Features

- Mobile-friendly navigation with hamburger menu
- Touch-optimized interactions
- Responsive grid layouts
- Adaptive font sizes and spacing

## 🎨 Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## 📂 Project Structure

```
├── app/
│   ├── category/[category]/    # Dynamic category pages
│   ├── product/[id]/           # Dynamic product pages
│   ├── cart/                   # Shopping cart page
│   ├── checkout/               # Checkout page
│   ├── order-success/          # Order confirmation page
│   ├── components/             # Reusable components
│   ├── context/                # React Context (Cart)
│   ├── data/                   # Product data
│   ├── globals.css             # Global styles
│   ├── layout.js               # Root layout
│   └── page.js                 # Homepage
├── caps/                       # Product images
├── hoodies/
├── joggers/
├── pants/
├── shirts/
├── women gym wear/
├── women kurtha/
├── women sarees/
└── package.json
```

## 🛒 Features Breakdown

### Shopping Cart
- Add/remove items
- Update quantities
- Size selection
- LocalStorage persistence
- Real-time total calculation

### Product Pages
- High-quality image display
- Size selection
- Add to cart functionality
- Related products
- Stock status

### Checkout
- Form validation
- Order summary
- Shipping calculation
- Tax calculation
- Free shipping on orders over $50

### Animations
- Page transitions
- Hover effects
- Scroll animations
- Loading states
- Cart badge animations

## 🚀 Deployment

This project is ready to deploy on Vercel:

1. Push to GitHub
2. Import to Vercel
3. Deploy

Or use Netlify, AWS Amplify, or any other hosting platform that supports Next.js.

## 📝 Notes

- All product images are stored in their respective category folders
- Cart data persists in localStorage
- The website is fully responsive and optimized for all devices
- All animations are hardware-accelerated for smooth performance

## 🎯 Future Enhancements

- User authentication
- Backend integration
- Payment gateway (Stripe/PayPal)
- Product reviews
- Wishlist functionality
- Order tracking
- Admin dashboard

---

**Built with ❤️ for AJ'S Thrift Store**
