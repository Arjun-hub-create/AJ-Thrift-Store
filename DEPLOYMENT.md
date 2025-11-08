# Deployment Guide for AJ's Thrift Store

## ✅ Pre-Deployment Checklist

Your website is production-ready! Follow these steps to deploy:

### 1. Environment Variables Setup

When deploying to production (Vercel, Netlify, etc.), add these environment variables:

```
MONGODB_URI=mongodb+srv://arjunmarjun74_db_user:wBvx5CYo9pPtpWye@commerce.qa2i2gx.mongodb.net/ajsthriftstore?retryWrites=true&w=majority&appName=COMMERCE
JWT_SECRET=a7ee34b9912249263c5a503a1f0a2ecbd5c8ed841288b89beaa694e82591af68d6567ff87d27913a78e4347d933d0fb69cc18d0d85bda6adbe2a69e933e09407
NEXT_PUBLIC_API_URL=https://your-domain.com
```

**Important:** Change `NEXT_PUBLIC_API_URL` to your actual production domain!

---

## Deployment Options

### Option 1: Deploy to Vercel (Recommended for Next.js)

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Add environment variables in Settings
   - Deploy!

3. **Or deploy via CLI**:
   ```bash
   vercel
   ```

### Option 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables
6. Deploy!

### Option 3: Deploy to Your Own Server

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Use PM2 for production** (recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "ajsthriftstore" -- start
   pm2 save
   pm2 startup
   ```

---

## Security Features Added ✓

- **Secure JWT Secret**: 128-character random key
- **MongoDB URI**: Includes database name and retry settings
- **Security Headers**: Added via middleware
  - HSTS (Strict-Transport-Security)
  - X-Frame-Options
  - X-Content-Type-Options
  - XSS Protection
  - Referrer Policy

---

## What's Included

✅ Full e-commerce functionality
✅ MongoDB Atlas database integration
✅ User authentication (register/login)
✅ Shopping cart with localStorage
✅ Order management system
✅ Product search
✅ 9 product categories
✅ 600+ products
✅ Responsive design
✅ Smooth animations
✅ Security middleware

---

## Important Notes

### Payment Integration (TODO)
Currently, the checkout page saves orders to the database but doesn't process real payments. To add payment processing:

**Option A: Stripe Integration**
1. Install Stripe: `npm install stripe @stripe/stripe-js`
2. Add Stripe API keys to `.env.local`
3. Update checkout page with Stripe Elements
4. Create payment intent API route

**Option B: PayPal Integration**
1. Install PayPal SDK: `npm install @paypal/react-paypal-js`
2. Add PayPal credentials to `.env.local`
3. Add PayPal button to checkout page

### Email Notifications (TODO)
Consider adding email notifications for:
- Order confirmations
- Password resets
- Welcome emails

Recommended: Use SendGrid, Mailgun, or Resend

---

## MongoDB Atlas Configuration

Your database is already set up:
- **Cluster**: commerce.qa2i2gx.mongodb.net
- **Database**: ajsthriftstore
- **Collections**: users, orders

Make sure your MongoDB Atlas IP whitelist includes:
- `0.0.0.0/0` (allow from anywhere) - for serverless deployments
- Or add your specific server IP

---

## Performance Tips

1. **Enable Image Optimization**: Next.js handles this automatically
2. **Add Caching**: Use Vercel Edge Network or Cloudflare
3. **Monitor Performance**: Use Vercel Analytics or Google Analytics
4. **Database Indexing**: Add indexes in MongoDB for faster queries

---

## Support & Maintenance

### Regular Checks:
- Monitor MongoDB Atlas usage
- Check API logs for errors
- Update dependencies monthly
- Backup database regularly

### Useful Commands:
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Run production build locally
npm run build && npm start

# Check build size
npm run build -- --analyze
```

---

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- MongoDB Atlas: https://www.mongodb.com/docs/atlas/
- Vercel Deployment: https://vercel.com/docs

---

**Your website is ready to go live! 🚀**
