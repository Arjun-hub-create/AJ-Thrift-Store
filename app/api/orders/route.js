import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../lib/mongodb';
import Order from '../../../models/Order';

export async function POST(request) {
  try {
    await dbConnect();

    const { customerInfo, items, subtotal, shipping, total, token } = await request.json();

    // Validate input
    if (!customerInfo || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Please provide customer info and items' },
        { status: 400 }
      );
    }

    // Optional: Verify user token if provided
    let userId = null;
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
      } catch (error) {
        // Token invalid or expired, continue as guest
        console.log('Invalid token, processing as guest order');
      }
    }

    // Create order
    const order = await Order.create({
      user: userId,
      customerInfo: {
        name: customerInfo.name,
        email: customerInfo.email,
        address: customerInfo.address,
        city: customerInfo.city,
        postalCode: customerInfo.postalCode,
        country: customerInfo.country,
      },
      items: items.map(item => ({
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        size: item.size,
        image: item.image,
      })),
      subtotal: subtotal || 0,
      shipping: shipping || 0,
      total: total || 0,
      status: 'pending',
    });

    return NextResponse.json({
      success: true,
      orderId: order._id,
      message: 'Order placed successfully',
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'Error creating order' },
      { status: 500 }
    );
  }
}

// Get user orders
export async function GET(request) {
  try {
    await dbConnect();

    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Get user orders
    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error('Get orders error:', error);
    return NextResponse.json(
      { error: 'Error fetching orders' },
      { status: 500 }
    );
  }
}
