# Business Development SY - شركة تطوير الأعمال سوريا

A modern, responsive Next.js website for Business Development SY, a Syrian business development company specializing in comprehensive business services.

## 🌟 Features

- **Modern Design**: Built with Next.js 14 and TypeScript
- **Responsive Layout**: Fully responsive design that works on all devices
- **Arabic Support**: RTL (Right-to-Left) text support for Arabic content
- **Professional UI**: Styled with Tailwind CSS and shadcn/ui components
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance**: Optimized for speed and performance

## 🛠️ Technologies

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)

## 📋 Services Covered

The website includes comprehensive information about 9 main service categories:

1. **Company Establishment Services** (خدمات تأسيس الشركات)
2. **Financial Consulting Services** (الخدمات المالية والاستشارية)
3. **Administrative Services** (الخدمات الإدارية)
4. **Legal Services** (الخدمات القانونية)
5. **Engineering Services** (الخدمات الهندسية)
6. **Investment Services** (خدمات الاستثمار)
7. **Industrial Services** (الخدمات الصناعية)
8. **Digital Services** (الخدمات الرقمية)
9. **Training and Development Services** (خدمات التدريب والتطوير)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or use the generated files
2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
bd-syria/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
├── public/               # Static files
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### Logo Replacement

The current logo is a placeholder. To add your actual logo:

1. Add your logo file to the `public/` directory
2. Update the logo import in `components/navigation.tsx` and `components/footer.tsx`
3. Replace the `Building` icon with your logo image

### Colors and Branding

The design uses a blue color scheme. To customize:

1. Edit the CSS variables in `app/globals.css`
2. Update Tailwind colors in `tailwind.config.ts`
3. Modify component styles as needed

### Content Translation

The site is primarily in Arabic with English support. To modify content:

1. Edit text directly in component files
2. For multilingual support, consider adding i18n

## 📱 Pages Structure

- **Home** (`/`) - Main landing page with hero section and services overview
- **About** (`/about`) - Company information and background
- **Services** (`/services`) - Comprehensive services listing
  - Individual service pages for each category
- **Activities** (`/activities`) - Company activities and news
- **Contact** (`/contact`) - Contact information and form

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📞 Contact Information

- **Location**: Damascus, Syria
- **Email**: info@businessdev-sy.com
- **Phone**: +963-XX-XXXXXXX

## 📄 License

This project is created for Business Development SY. All rights reserved.

## 🤝 Contributing

If you need to make changes or improvements:

1. Follow the existing code style
2. Test changes thoroughly
3. Update documentation as needed
4. Ensure responsive design is maintained

## 🌐 Deployment

The project is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Azure Static Web Apps**

For deployment, simply connect your repository to your preferred platform.

---

Built with ❤️ for Business Development SY
