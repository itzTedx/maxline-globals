# Maxline Global

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![TurboPack](https://img.shields.io/badge/TurboPack-Enabled-black?style=for-the-badge&logo=turborepo)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://prettier.io/)

</div>

A modern, multilingual logistics company website built with Next.js 15, featuring comprehensive freight services across land, air, and sea transportation. Maxline Global provides end-to-end logistics solutions with real-time tracking, contact forms, and a professional multilingual experience.

## 🚀 Features

### 🌍 **Internationalization**
- **Full Bilingual Support**: English and Arabic languages
- **RTL Layout Support**: Complete right-to-left layout for Arabic
- **Dynamic Language Switching**: Seamless language transitions
- **Localized Content**: All content, forms, and UI elements translated

### 🎨 **Modern UI/UX**
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Theme switching with next-themes
- **Smooth Animations**: Framer Motion powered interactions
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Modern Components**: Radix UI primitives with custom styling

### 🚢 **Logistics Services**
- **Land Freight**: FTL, LTL, and oversized cargo across GCC
- **Air Freight**: Express air cargo with global reach
- **Sea Freight**: FCL, LCL, and project cargo shipping
- **Project Cargo**: Specialized heavy and oversized cargo handling
- **Warehousing**: Strategic storage and distribution solutions
- **Moving & Lashing**: Professional relocation services

### 📧 **Contact & Communication**
- **Contact Forms**: Email integration with Nodemailer
- **Quote Requests**: Automated quote request processing
- **File Uploads**: Support for PDF, JPG, PNG attachments (4MB max)
- **Email Templates**: Professional React Email templates
- **Form Validation**: Zod schema validation with React Hook Form

### 🔍 **Shipment Tracking**
- **Real-time Tracking**: Shipment status monitoring (under development)
- **Tracking Input**: Homepage tracking number input
- **Status Updates**: Live shipment status updates

### ⚡ **Performance & SEO**
- **TurboPack**: Next.js 15's fast bundler for development
- **Image Optimization**: WebP/AVIF formats with responsive sizing
- **SEO Optimized**: Structured data, sitemap, and meta tags
- **Core Web Vitals**: Optimized for performance metrics
- **Compression**: Enabled gzip compression

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 15**: App Router with server components
- **React 19**: Latest React features and hooks
- **TypeScript**: Full type safety and IntelliSense

### **Styling & UI**
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **Tabler Icons**: Additional icon set
- **Framer Motion**: Smooth animations and transitions

### **Forms & Validation**
- **React Hook Form**: Performant form handling
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Form validation integration

### **Internationalization**
- **next-intl**: Complete i18n solution
- **Middleware**: Automatic locale detection and routing

### **Email & Communication**
- **React Email**: Type-safe email templates
- **Nodemailer**: Node.js email sending
- **File Upload**: Multer-style file handling

### **Development Tools**
- **ESLint**: Code linting and quality
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **TurboPack**: Fast development bundler

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/maxline-globals.git
cd maxline-globals

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Email Configuration
SMTP_HOST=your-smtp-host
SMTP_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-email-password
CONTACT_RECEIVER_EMAIL=contact@maxlineglobal.com

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=https://maxlineglobal.com
```

## 🚀 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with TurboPack |
| `npm run build` | Build for production with TurboPack |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript type checking |

## 📁 Project Structure

```
src/
├── app/[locale]/          # Localized pages with App Router
│   ├── company/           # Company information pages
│   ├── services/          # Service detail pages
│   ├── contact/           # Contact page
│   ├── track-shipment/    # Shipment tracking
│   ├── quote/             # Quote request page
│   ├── insights/          # Blog and insights
│   └── privacy-policy/    # Legal pages
├── components/            # Reusable UI components
│   ├── ui/               # Radix UI components
│   ├── layout/           # Layout components
│   └── animation/        # Animation components
├── feature/              # Feature-based components
│   ├── forms/            # Form components and actions
│   ├── services/         # Service-related components
│   ├── home/             # Homepage components
│   ├── about/            # About page components
│   ├── insights/         # Blog components
│   └── cta/              # Call-to-action components
├── dictionaries/         # Translation files
│   ├── en.json          # English translations
│   ├── ar.json          # Arabic translations
│   └── services.*.json  # Service-specific translations
├── emails/              # React Email templates
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── constants/           # Application constants
├── i18n/                # Internationalization config
└── assets/              # Static assets
```

## 🌍 Internationalization

The website supports multiple languages with complete localization:

### **Supported Languages**
- **English** (`en`) - Primary language
- **Arabic** (`ar`) - Full RTL support

### **Translation Structure**
- **Main Content**: `src/dictionaries/en.json` and `src/dictionaries/ar.json`
- **Services**: `src/dictionaries/services.en.json` and `src/dictionaries/services.ar.json`
- **Auto-generated Types**: TypeScript definitions for type-safe translations

### **Features**
- **Automatic Locale Detection**: Middleware-based routing
- **SEO-friendly URLs**: `/en/services` and `/ar/services`
- **RTL Layout**: Complete right-to-left support for Arabic
- **Localized Forms**: All form labels and validation messages

## 🚢 Services Overview

### **Land Freight**
- **FTL & LTL Services**: Full and less-than truckload options
- **GCC Network**: Extensive coverage across Gulf countries
- **GPS Tracking**: Real-time vehicle monitoring
- **Customs Bonded**: Cross-border transport solutions
- **Hazardous Goods**: Certified dangerous goods handling

### **Air Freight**
- **Express Solutions**: Fast air cargo services
- **Global Reach**: Worldwide air freight network
- **Priority Handling**: Time-sensitive cargo management
- **Documentation**: Complete customs documentation

### **Sea Freight**
- **FCL & LCL**: Full and less-than container loads
- **Global Routes**: International shipping lanes
- **Project Cargo**: Specialized heavy cargo handling
- **Port Operations**: End-to-end port management

### **Additional Services**
- **Project Cargo**: Oversized and heavy equipment
- **Warehousing**: Strategic storage solutions
- **Moving & Lashing**: Professional relocation services
- **Exhibition Cargo**: Event and exhibition logistics

## 📧 Contact & Communication

### **Contact Forms**
- **Multi-service Inquiries**: Service-specific contact forms
- **File Attachments**: Support for documents and images
- **Email Integration**: Automated email processing
- **Form Validation**: Client and server-side validation

### **Quote Requests**
- **Custom Quotes**: Detailed pricing requests
- **Service Selection**: Multiple service options
- **Document Upload**: Supporting documentation
- **Automated Processing**: Email-based quote system

## 🔍 Shipment Tracking

### **Current Status**
- **Under Development**: Real-time tracking system in progress
- **Input Interface**: Homepage tracking number input
- **Status Updates**: Planned live shipment monitoring
- **API Integration**: Backend tracking system development

## ⚡ Performance Features

### **Optimization**
- **TurboPack**: Next.js 15's fast bundler
- **Image Optimization**: WebP/AVIF with responsive sizing
- **Code Splitting**: Automatic route-based splitting
- **Compression**: Gzip compression enabled
- **Caching**: Optimized caching strategies

### **SEO & Analytics**
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated XML sitemap
- **Meta Tags**: Dynamic meta tag generation
- **Open Graph**: Social media optimization
- **Core Web Vitals**: Performance optimization

## 🛡️ Security & Compliance

### **Data Protection**
- **Form Validation**: Comprehensive input validation
- **File Upload Security**: Type and size restrictions
- **Email Security**: SMTP with authentication
- **Privacy Policy**: GDPR-compliant data handling

### **Code Quality**
- **ESLint**: Code quality and consistency
- **Prettier**: Consistent code formatting
- **TypeScript**: Type safety and error prevention
- **Git Hooks**: Pre-commit quality checks

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Use conventional commit messages
- Ensure all tests pass
- Update documentation as needed
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

### **Maxline Global**
- **Website**: [maxlineglobal.com](https://maxlineglobal.com)
- **Email**: enquires@maxlineglobal.com
- **Services**: Logistics and freight forwarding

### **Development Team**
- **Agency**: [Ziron Media](https://zironmedia.com)
- **Project**: Maxline Global Website
- **Technology**: Next.js 15, React 19, TypeScript

---

<div align="center">

**Built with ❤️ using Next.js and modern web technologies**

[![Ziron Media](https://img.shields.io/badge/Developed%20by-Ziron%20Media-black?style=for-the-badge)](https://zironmedia.com)

</div>
