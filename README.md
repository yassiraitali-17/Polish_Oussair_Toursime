# Oussaid Tourism

Welcome to the Oussaid Tourism website - your gateway to discovering the magic of Marrakech with authentic tours, exciting activities, and reliable transportation services.

## Project Info

This is a modern web application built to showcase tourism services in Marrakech, Morocco. The website features a responsive design, multi-language support (English and French), and comprehensive booking functionality.

## Technologies Used

This project is built with:

- **Vite** - Next generation frontend tooling
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **React Router** - Client-side routing
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- [Install Node with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup Instructions

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd oussaid-tourism

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080` (or the configured port).

## Available Scripts

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Features

- **Multi-language Support** - English and French language switcher
- **Responsive Design** - Mobile-first approach with mobile, tablet, and desktop layouts
- **Service Booking** - Easy-to-use booking system for tours and activities
- **Activity Categories** - Agafay Desert, Palmeraie, and other activities
- **Contact Integration** - Direct messaging via WhatsApp, phone, and email
- **SEO Optimized** - Meta tags, structured data, and performance optimizations
- **Fast Loading** - Optimized assets and lazy loading

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── ui/          # Base UI components (buttons, cards, etc.)
│   ├── Navbar.tsx   # Main navigation
│   ├── Footer.tsx   # Footer with social links
│   ├── LanguageSwitcher.tsx # Language selection component
│   └── ...
├── contexts/        # React Context for state management
│   └── LanguageContext.tsx
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── data/            # Static data and configuration
├── assets/          # Images and media files
├── styles/          # Global styles
└── App.tsx          # Root component
```

## Language Support

The website supports English and French. Users can switch languages using the language selector in the navbar. The preference is saved locally in the browser.

## Social Media Links

- **Facebook**: [Oussaid Tourisme](https://www.facebook.com/share/14MosGFidma/?mibextid=wwXIfr)
- **Instagram**: [@oussaid_tourisme](https://www.instagram.com/oussaid_tourisme/)
- **TikTok**: [@oussaid_tourisme](https://www.tiktok.com/@oussaid_tourisme?_t=ZS-90qfJyQSnif&_r=1)

## Contact Information

- **Phone**: +212 707-704981
- **Email**: office@oussaidtourisme.com
- **Location**: Marrakech, Morocco
- **Hours**: 24/7 Available

## Deployment

To deploy this project to production:

1. Build the project: `npm run build`
2. The `dist` folder contains the production-ready files
3. Deploy to your hosting service (Netlify, Vercel, etc.)

## Performance & SEO

The website is optimized for:
- Fast loading times with code splitting
- Mobile responsiveness
- SEO best practices (meta tags, structured data)
- Accessibility standards
- Core Web Vitals

## License

All rights reserved © Oussaid Tourism
