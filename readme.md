# AJ's Thrift Store

AJ's Thrift Store is a modern e-commerce website built for selling fashion and lifestyle products online. This project is designed to look clean, professional, and easy to use, with a shopping experience that feels smooth for customers from browsing products to placing an order.

The website is built using Next.js, Tailwind CSS, and MongoDB, and it focuses on a simple but complete online store flow: users can browse categories, view product details, add items to cart, login or register, and complete checkout.

This is not just a demo page. It is a real shopping project that feels close to a production-ready online store, with a proper frontend structure, product listing, cart system, user authentication, and order handling.

---

## Project Overview

This project is a full-stack fashion store created for people who want to buy stylish items such as caps, hoodies, joggers, shirts, pants, and women’s fashion products. The goal is to provide a complete online shopping experience where customers can:

- browse products by category
- search products quickly
- view details for each product
- add products to cart
- log in or sign up
- place orders smoothly
- see order confirmation after purchase

The project is built to feel modern and friendly, while still being practical and simple to manage.

---

## Why This Project Exists

Many online stores look good but are hard to use or hard to maintain. This project was created to solve that by combining a clean design with a strong shopping flow.

The main aim is to create an e-commerce website that is:

- simple to understand
- easy to navigate
- visually appealing
- practical for real product selling
- structured well for future improvements

It is a great example of a full-stack web app that combines frontend design and backend logic in one project.

---

## Main Features

### 1. Product browsing
Users can explore products from the home page and different categories. Products are organized in sections so the shopping experience feels clean and structured.

### 2. Category-based shopping
The store includes separate categories such as:

- Caps
- Hoodies
- Joggers
- Pants
- T-Shirts
- Women Gym Wear
- Women Kurtha
- Women Sarees

This makes it easier for users to find exactly what they need.

### 3. Search functionality
Customers can search for products instead of manually scrolling through pages. This makes the shopping process faster and more convenient.

### 4. Product detail pages
Each product has a dedicated page with more information, product image, and product data. This helps users make better buying decisions.

### 5. Cart system
The cart stores selected items and allows users to update quantities and proceed to checkout. This is an essential part of the online shopping flow.

### 6. User authentication
Users can register and log in to the store. This is important for secure shopping and personalized experiences.

### 7. Order creation and success flow
After checkout, the app saves or processes order information, and users are redirected to a success page confirming the order.

### 8. Modern design
The application uses modern UI elements, soft gradients, motion effects, responsive layout, and readable typography to make the site more engaging.

---

## Tech Stack

This project is built using a modern web stack:

- Frontend: Next.js
- Styling: Tailwind CSS
- UI motion: Framer Motion
- Backend: Node.js
- Database: MongoDB
- ODM: Mongoose
- Authentication: JWT and bcryptjs
- Frontend icons: React Icons
- JavaScript framework: React

### Why these technologies?

- Next.js gives the project a fast and scalable frontend structure.
- Tailwind CSS makes the UI easier to style cleanly.
- MongoDB is good for storing product and user information.
- Mongoose helps interact with MongoDB in a structured way.
- JWT-based authentication helps manage user sessions in a secure and lightweight way.

---

## Project Structure

The project is organized in a simple way so it is easy to follow:

- app/ - main app pages and routes
- components/ - reusable UI components such as Navbar and Footer
- context/ - global states like cart and authentication
- data/ - product data and category data
- lib/ - helper files such as MongoDB connection
- models/ - database schemas for users and orders
- public/ - product images and assets

This structure helps keep the project organized and easier to maintain as it grows.

---

## How the App Works

### Home page
When users open the website, they land on the homepage. The homepage includes:

- a hero section with branding
- category cards
- featured products
- a modern stylish layout

### Category pages
Users can click on a category and view relevant products. This helps narrow down the product search.

### Product page
When a product is selected, users go to its detail page where they can review product information and add it to the cart.

### Cart page
The cart collects all selected products and shows their quantities. Users can review and then continue to checkout.

### Checkout page
The checkout page handles the final purchase process where users complete their order.

### Success page
After a successful purchase, the user is taken to a confirmation page showing that the order is complete.

---

## Authentication Flow

The app supports login and registration.

- New users can create an account
- Existing users can log in
- The app keeps user data securely in MongoDB
- Authentication is managed using tokens and secure handling methods

This makes the application more realistic and closer to a working e-commerce system.

---

## Database Design

The project uses MongoDB as its database and Mongoose to define models.

### User model
The User model stores things like:

- name
- email
- password
- account details related to the app

### Order model
The Order model stores details about a customer order, including products purchased and order information.

This helps the app keep purchase records and support future features like order tracking.

---

## Installation

Follow these steps to run the project locally on your machine.

### 1. Clone the repository

```bash
git clone <repository-url>
cd "AJ's E Commerce"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the project root and add your MongoDB connection string.

Example:

```env
MONGODB_URI=mongodb://localhost:27017/ajs-thrift-store
```

If you are using MongoDB Atlas, your connection string will look more like this:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ajs-thrift-store
```

### 4. Run the app

```bash
npm run dev
```

Then open the browser at:

```text
http://localhost:3000
```

---

## Available Scripts

In the project root, you can use:

```bash
npm run dev
```
Starts the development server.

```bash
npm run build
```
Builds the application for production.

```bash
npm run start
```
Runs the production build.

```bash
npm run lint
```
Checks the project for linting issues.

---

## Important Notes

This project is currently structured as a local frontend and backend e-commerce app. Some features may be configured for a development environment and can be expanded for deployment and production use.

If you want to take this project further, it can be enhanced with:

- Stripe payment integration
- admin dashboard for product management
- order tracking
- image upload system
- email notifications
- better product filtering and sorting
- user profile page

---

## How This Project Helps Real Development

This project is useful because it shows how a real online shopping system is structured.

It covers many important web development ideas such as:

- building responsive interfaces
- managing app-wide state
- connecting frontend to database
- creating secure user login systems
- handling product data
- designing a clean shopping flow

This makes it a strong project for learning, practice, or portfolio presentation.

---

## Future Improvements

Some natural next steps for this project are:

1. Add payment gateway support with Stripe.
2. Build an admin panel to manage products and orders.
3. Add product images with cloud storage.
4. Add product reviews and ratings.
5. Improve order tracking and user profile features.
6. Add more advanced filtering and sorting.
7. Connect the app to a production deployment setup.

---

## Summary

AJ's Thrift Store is a stylish and practical e-commerce project designed to simulate a real online shopping experience. It combines modern frontend design with database-backed logic and user flows that make sense in a real web store.

The project is built to be easy to understand, easy to customize, and ready for learning or improvement. It gives a complete picture of how a modern online shop can be built using Next.js and MongoDB.

If you want to run it, customize it, or turn it into a bigger store, this project gives you a strong starting point.

---

## Quick Start

```bash
npm install
npm run dev
```

Then visit:

```text
http://localhost:3000
```

---

