import { NextResponse } from 'next/server';
import { products } from '../../data/products';

export async function POST(request) {
  try {
    const { query } = await request.json();

    if (!query || query.trim().length === 0) {
      return NextResponse.json(
        {
          message: 'Please enter a search query',
          products: [],
        },
        { status: 400 }
      );
    }

    // Convert query to lowercase for case-insensitive search
    const searchQuery = query.toLowerCase().trim();

    // Handle greetings
    const greetings = ['hi', 'hello', 'hey', 'howdy', 'greetings', 'sup'];
    if (greetings.includes(searchQuery)) {
      return NextResponse.json(
        {
          message: 'Hi how are u doing 👋 What products are you looking for? Try searching for "hoodies", "caps", "joggers", "pants", etc.',
          products: [],
        },
        { status: 200 }
      );
    }

    // Search products by name or category
    const matchedProducts = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(searchQuery);
      const categoryMatch = product.category.toLowerCase().includes(searchQuery);
      return nameMatch || categoryMatch;
    });

    // Limit to top 5 results
    const topResults = matchedProducts.slice(0, 5);

    if (topResults.length === 0) {
      return NextResponse.json(
        {
          message: `No products found for "${query}". Try searching for "caps", "hoodies", "joggers", "pants", etc.`,
          products: [],
        },
        { status: 200 }
      );
    }

    // Format response with product details
    const formattedProducts = topResults.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    }));

    return NextResponse.json(
      {
        message: `Found ${topResults.length} product(s) matching "${query}"`,
        products: formattedProducts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      {
        message: 'An error occurred while searching. Please try again.',
        products: [],
      },
      { status: 500 }
    );
  }
}
