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
- **Auto-generated Types**: TypeScript definitions for type-safe translations

### 🎨 **Modern UI/UX**
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Theme switching with next-themes
- **Smooth Animations**: Framer Motion powered interactions
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Modern Components**: Radix UI primitives with custom styling
- **Carousel Support**: Embla carousel with wheel gestures

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
- **Next.js 15.4.5**: App Router with server components
- **React 19.0.0**: Latest React features and hooks
- **TypeScript 5.0**: Full type safety and IntelliSense

### **Styling & UI**
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **Tabler Icons**: Additional icon set
- **Framer Motion**: Smooth animations and transitions
- **Embla Carousel**: Touch-friendly carousel with wheel gestures

### **Forms & Validation**
- **React Hook Form**: Performant form handling
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Form validation integration

### **Internationalization**
- **next-intl 4.3.4**: Complete i18n solution
- **Middleware**: Automatic locale detection and routing

### **Email & Communication**
- **React Email**: Type-safe email templates
- **Nodemailer**: Node.js email sending
- **File Upload**: Multer-style file handling

### **Development Tools**
- **ESLint 9**: Code linting and quality
- **Prettier 3.5.3**: Code formatting with import sorting
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

## 🚀 AWS VPS Deployment Guide

This guide covers deploying your Maxline Global website to an AWS EC2 instance with Ubuntu.

### **Prerequisites**
- AWS Account with EC2 access
- Domain name (optional but recommended)
- SSH key pair for EC2 access

### **Step 1: Launch EC2 Instance**

1. **Launch Instance**:
   - Go to AWS Console → EC2 → Launch Instance
   - Choose **Ubuntu Server 22.04 LTS** (free tier eligible)
   - Select **t2.micro** (free tier) or **t3.small** for production
   - Configure Security Group with these rules:
     ```
     SSH (22): 0.0.0.0/0 (or your IP)
     HTTP (80): 0.0.0.0/0
     HTTPS (443): 0.0.0.0/0
     Custom TCP (3000): 0.0.0.0/0 (for Next.js)
     ```

2. **Connect to Instance**:
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-public-ip
   ```

### **Step 2: Server Setup**

1. **Update System**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Install Node.js 18+**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   node --version  # Should show v18+
   ```

3. **Install PM2 (Process Manager)**:
   ```bash
   sudo npm install -g pm2
   ```

4. **Install Nginx**:
   ```bash
   sudo apt install nginx -y
   sudo systemctl enable nginx
   sudo systemctl start nginx
   ```

5. **Install Certbot for SSL**:
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```

### **Step 3: Deploy Application**

1. **Clone Repository**:
   ```bash
   cd /home/ubuntu
   git clone https://github.com/itzTedx/maxline-globals.git
   cd maxline-globals
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**:
   ```bash
   cp .env.example .env.local
   nano .env.local
   # Add your production environment variables
   ```

4. **Build Application**:
   ```bash
   npm run build
   ```

5. **Start with PM2**:
   ```bash
   pm2 start npm --name "maxline-globals" -- start
   pm2 save
   pm2 startup
   ```

### **Step 4: Configure Nginx**

1. **Create Nginx Configuration**:
   ```bash
   sudo nano /etc/nginx/sites-available/maxline-globals
   ```

2. **Add Configuration**:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Enable Site**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/maxline-globals /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### **Step 5: SSL Certificate (Optional but Recommended)**

1. **Get SSL Certificate**:
   ```bash
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

2. **Auto-renewal**:
   ```bash
   sudo crontab -e
   # Add this line:
   0 12 * * * /usr/bin/certbot renew --quiet
   ```

### **Step 6: Domain Configuration**

1. **Point Domain to EC2**:
   - Go to your domain registrar's DNS settings
   - Add A record: `@` → `your-ec2-public-ip`
   - Add A record: `www` → `your-ec2-public-ip`

2. **Wait for DNS Propagation** (can take up to 48 hours)

### **Step 7: Monitoring & Maintenance**

1. **Check Application Status**:
   ```bash
   pm2 status
   pm2 logs maxline-globals
   ```

2. **Update Application**:
   ```bash
   cd /home/ubuntu/maxline-globals
   git pull origin main
   npm install
   npm run build
   pm2 restart maxline-globals
   ```

3. **Monitor Resources**:
   ```bash
   htop
   df -h
   free -h
   ```

### **Step 8: Backup & Security**

1. **Regular Backups**:
   ```bash
   # Create backup script
   nano /home/ubuntu/backup.sh
   ```

   ```bash
   #!/bin/bash
   DATE=$(date +%Y%m%d_%H%M%S)
   BACKUP_DIR="/home/ubuntu/backups"
   mkdir -p $BACKUP_DIR
   
   # Backup application
   tar -czf $BACKUP_DIR/app_$DATE.tar.gz /home/ubuntu/maxline-globals
   
   # Backup environment file
   cp /home/ubuntu/maxline-globals/.env.local $BACKUP_DIR/env_$DATE.backup
   
   # Keep only last 7 backups
   find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
   find $BACKUP_DIR -name "*.backup" -mtime +7 -delete
   ```

2. **Security Updates**:
   ```bash
   # Add to crontab
   sudo crontab -e
   # Add: 0 2 * * 0 /usr/bin/apt update && /usr/bin/apt upgrade -y
   ```

### **Troubleshooting**

1. **Application Not Starting**:
   ```bash
   pm2 logs maxline-globals
   cd /home/ubuntu/maxline-globals
   npm run build
   pm2 restart maxline-globals
   ```

2. **Nginx Issues**:
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   sudo tail -f /var/log/nginx/error.log
   ```

3. **Port Issues**:
   ```bash
   sudo netstat -tlnp | grep :3000
   sudo ufw status
   ```

### **Cost Optimization**

- **Free Tier**: Use t2.micro for development/testing
- **Production**: Consider t3.small or t3.medium for better performance
- **Reserved Instances**: Save up to 72% for long-term usage
- **Auto Scaling**: Scale down during low-traffic periods

### **Performance Tips**

1. **Enable Gzip Compression** in Nginx
2. **Use PM2 Cluster Mode** for multiple CPU cores
3. **Implement CDN** for static assets
4. **Monitor with AWS CloudWatch**

---

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

## 📁 Project Structure

```
maxline-globals/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Localized pages
│   │   │   ├── company/       # Company information pages
│   │   │   ├── services/      # Service detail pages
│   │   │   ├── contact/       # Contact page
│   │   │   ├── track-shipment/ # Shipment tracking
│   │   │   ├── quote/         # Quote request page
│   │   │   ├── insights/      # Blog and insights
│   │   │   ├── privacy-policy/ # Legal pages
│   │   │   ├── layout.tsx     # Root layout with providers
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── globals.css    # Global styles
│   │   │   └── not-found.tsx  # 404 page
│   │   ├── sitemap.ts         # Dynamic sitemap generation
│   │   ├── robots.ts          # Robots.txt configuration
│   │   └── manifest.json      # PWA manifest
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Radix UI components
│   │   ├── layout/           # Layout components
│   │   ├── animation/        # Animation components
│   │   ├── hero-header.tsx   # Hero section component
│   │   ├── MarqueeSection.tsx # Marquee text component
│   │   ├── providers.tsx     # Context providers
│   │   └── breakpoint-indicator.tsx # Dev tool
│   ├── feature/              # Feature-based components
│   │   ├── forms/            # Form components and actions
│   │   ├── services/         # Service-related components
│   │   ├── home/             # Homepage components
│   │   ├── about/            # About page components
│   │   ├── insights/         # Blog components
│   │   └── cta/              # Call-to-action components
│   ├── dictionaries/         # Translation files
│   │   ├── en.json          # English translations
│   │   ├── ar.json          # Arabic translations
│   │   ├── services.en.json # Service-specific English
│   │   ├── services.ar.json # Service-specific Arabic
│   │   ├── en.d.json.ts     # Auto-generated English types
│   │   └── ar.d.json.ts     # Auto-generated Arabic types
│   ├── emails/              # React Email templates
│   ├── lib/                 # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── constants/           # Application constants
│   ├── i18n/                # Internationalization config
│   ├── assets/              # Static assets
│   ├── global.d.ts          # Global type declarations
│   └── middleware.ts        # i18n middleware
├── public/                  # Static files
├── .vscode/                 # VS Code configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── components.json          # Radix UI configuration
├── postcss.config.mjs       # PostCSS configuration
├── eslint.config.mjs        # ESLint configuration
├── .eslintrc.json           # ESLint rules
├── .prettierrc              # Prettier configuration
└── package.json             # Dependencies and scripts
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
- **Type Safety**: `.d.json.ts` files provide IntelliSense for translations

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
- **Prettier**: Consistent code formatting with import sorting
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
- Use Prettier for consistent formatting

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
