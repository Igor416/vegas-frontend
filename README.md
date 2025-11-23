# Vegas E-Commerce Frontend

A modern, responsive e-commerce frontend application built with React and TypeScript. This project demonstrates advanced frontend development practices including state management, internationalization, responsive design, and API integration.

## 🚀 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **UI Library**: Material-UI (MUI) v6
- **Routing**: React Router DOM v7
- **State Management**: Context API with custom reducers
- **HTTP Client**: Axios
- **Internationalization**: i18next with React i18next
- **Styling**: Emotion (CSS-in-JS) with MUI theming
- **Image Handling**: react-image
- **Carousel**: react-slick
- **Code Quality**: ESLint with TypeScript support

## ✨ Features

### Core Functionality
- 🛒 **Shopping Cart** - Full cart management with persistent state
- 📦 **Product Catalog** - Category-based browsing with filtering
- 🔍 **Product Details** - Comprehensive product pages with:
  - Image carousels
  - Size selection (including specialized bed sizes)
  - Multiple product tabs (description, characteristics, structure, technologies)
  - Price panels with currency conversion
- 🏪 **Store Locator** - Shop listing and location features
- 🏷️ **Sales Section** - Dedicated sales/offers catalog

### User Experience
- 📱 **Responsive Design** - Separate mobile and desktop layouts
- 🌍 **Multi-language Support** - i18n integration with language detection
- 💱 **Multi-currency** - Currency switching with context management
- 🎨 **Modern UI/UX** - Material Design components with custom theming
- ⚡ **Performance Optimized** - Code splitting, lazy loading, and optimized assets

### Technical Features
- 🔄 **State Management** - Custom Context providers for:
  - Shopping cart
  - Categories
  - Currency selection
  - Section images
- 🎯 **Type Safety** - Full TypeScript coverage with strict typing
- 🔌 **API Integration** - RESTful API client with axios
- 🍪 **Cookie Management** - User preferences and session handling
- 🖼️ **Image Optimization** - Efficient image loading and caching

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── cart/           # Shopping cart components
│   ├── catalog/        # Product catalog and filtering
│   ├── header/         # Responsive header (mobile/desktop)
│   ├── home/           # Homepage components
│   ├── productDetails/ # Product detail pages
│   ├── shops/          # Store locator
│   └── reusables/      # Shared UI components
├── util/
│   ├── api/            # API client and endpoints
│   ├── hooks/          # Custom React hooks
│   ├── i18n/           # Internationalization setup
│   ├── interfaces/     # TypeScript type definitions
│   ├── mui/            # Material-UI theme configuration
│   └── providers/      # Context providers and reducers
├── app.tsx             # Main app component
├── main.tsx            # Application entry point
└── providers.tsx       # Provider composition
```

## 🛠️ Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🏗️ Architecture Highlights

### State Management
The application uses React Context API with custom reducers for state management:
- **Cart Provider**: Manages shopping cart state with add/remove/update actions
- **Currency Provider**: Handles currency selection and conversion
- **Categories Provider**: Manages category hierarchy and navigation
- **Section Image Provider**: Controls dynamic section images

### Component Architecture
- **Responsive Components**: Separate mobile and desktop implementations where needed
- **Reusable Components**: Shared UI components in `reusables/`
- **Feature-based Organization**: Components grouped by feature/domain
- **Type-safe Props**: All components fully typed with TypeScript interfaces

### API Integration
- Centralized axios instance with base configuration
- Type-safe API endpoints with TypeScript interfaces
- Custom hooks for data fetching (`useCachedProducts`, etc.)
- Error handling and loading states

### Internationalization
- i18next configuration with language detection
- Cookie-based language persistence
- HTTP backend for translation loading
- React i18next hooks for component-level translations

## 🎨 UI/UX Features

- **Material Design**: Consistent design system using MUI
- **Custom Theming**: Extended MUI theme with custom color palette
- **Responsive Breakpoints**: Mobile-first approach with adaptive layouts
- **Accessibility**: ARIA labels and semantic HTML
- **Loading States**: Optimistic UI updates and loading indicators
- **Error Handling**: User-friendly error messages and fallbacks

## 📦 Key Dependencies

- `react` & `react-dom` - UI framework
- `@mui/material` & `@mui/icons-material` - Component library
- `react-router-dom` - Client-side routing
- `axios` - HTTP client
- `i18next` & `react-i18next` - Internationalization
- `react-slick` - Carousel component
- `js-cookie` & `react-cookie` - Cookie management

## 🔒 Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with React and TypeScript rules
- **Code Organization**: Modular, maintainable structure
- **Best Practices**: React hooks, functional components, proper separation of concerns

## 📝 Notes

This is a commercial project repository shared for portfolio/recruitment purposes. The codebase demonstrates production-ready practices including:
- Scalable architecture
- Type safety
- Performance optimization
- Maintainable code structure
- Modern React patterns

---

**Built with ❤️ using React, TypeScript, and Vite**
