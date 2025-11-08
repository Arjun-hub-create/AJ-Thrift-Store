# AJ's Thrift Store - Installation Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Features Included

✅ Modern animations and transitions
✅ Fully responsive design
✅ Product categories (Caps, Hoodies, Joggers, Pants, Shirts, T-Shirts, Women's Gym Wear)
✅ Shopping cart functionality
✅ Size selection
✅ Checkout process
✅ Order success page
✅ Search functionality
✅ Category filtering
✅ Product detail pages

## Project Structure

- `/app` - Next.js 13+ app directory
- `/app/components` - Reusable components
- `/app/context` - React Context for cart management
- `/app/data` - Product data
- `/caps`, `/hoodies`, etc. - Product images by category
