# Heritage Hub

A marketplace platform connecting customers directly with West Bengal's master craftspeople, preserving traditional art forms while providing sustainable income for artisan communities. Where art has no boundaries.

## Features

- **Direct Artisan Support**: 100% of purchases go directly to artisans
- **Multi-Language Support**: English and Bengali interfaces
- **Artisan Profiles**: Detailed information about craftspeople and their work
- **Product Catalog**: Browse handcrafted items across multiple categories
- **Shopping Cart**: Easy-to-use cart system with persistent storage
- **Messaging System**: Direct communication between customers and artisans
- **Admin Dashboard**: Artisans can manage products, orders, and earnings
- **Responsive Design**: Mobile-first design for all devices

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: React Context API
- **Storage**: localStorage for cart and preferences
- **Charts**: Recharts for analytics

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open http://localhost:3000

## Project Structure

\`\`\`
app/
  ├── page.tsx              # Homepage
  ├── layout.tsx            # Root layout with providers
  ├── shop/                 # Product browsing
  ├── artisans/             # Artisan directory
  ├── cart/                 # Shopping cart
  ├── messages/             # Messaging system
  ├── admin/                # Artisan dashboard
  └── about/                # About page

components/
  ├── header.tsx            # Navigation header
  ├── footer.tsx            # Footer
  ├── hero.tsx              # Hero section
  ├── product-grid.tsx      # Product listing
  ├── cart-content.tsx      # Cart page
  ├── admin-dashboard.tsx   # Admin interface
  ├── messaging-center.tsx  # Messages
  └── ui/                   # Reusable UI components

lib/
  ├── cart-context.tsx      # Cart state management
  ├── language-context.tsx  # Language/i18n context
  └── i18n.ts               # Translation strings
\`\`\`

## Future Enhancements

- Stripe payment integration
- Database integration (Supabase/Neon)
- User authentication
- Order tracking and shipping
- Review and rating system
- Email notifications
- Advanced analytics
- Social media integration

## Deployment

Deploy to Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/artisan-market)

## Support

For questions or support, contact: support@artisanmarket.com

## License

MIT License - See LICENSE file for details

## Contributing

We welcome contributions! Please feel free to submit pull requests.
