# ROBO GENESIS 2026 - Revonix Robotics Competition Website

A modern, responsive one-page website for the Revonix Robotics Competition built with Vite + React.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### How to Change Text Content

All editable text content is stored in `src/config.js`. Simply edit the values in this file:

- **Event Information**: Modify the `event` object
- **Topics**: Edit the `topics` array
- **Rules**: Edit the `rules` array
- **Registration**: Update the `registration` object

**Example:**
```javascript
// In src/config.js
topics: [
  "Your Topic 1",
  "Your Topic 2",
  "Your Topic 3"
]
```

### How to Change Colors

All colors are defined as CSS variables in `src/index.css`. To change the color theme:

1. Open `src/index.css`
2. Find the `:root` section at the top
3. Modify the color variables:

```css
:root {
  --color-primary: #6366f1;  /* Change this to your preferred color */
  --color-primary-dark: #4f46e5;
  /* ... etc */
}
```

**Quick Color Change Examples:**
- Blue theme: `--color-primary: #3b82f6;`
- Green theme: `--color-primary: #10b981;`
- Red theme: `--color-primary: #ef4444;`

### How to Change Google Form Link

1. Open `src/config.js`
2. Find the `registration` object
3. Update the `googleFormUrl`:

```javascript
registration: {
  googleFormUrl: "https://forms.google.com/your-actual-form-link",
  // ...
}
```

### How to Replace QR Code Image

1. Place your QR code image in the `public` folder (e.g., `public/qr-code.png`)
2. Open `src/config.js`
3. Update the `qrCodeImage` path:

```javascript
registration: {
  qrCodeImage: "/qr-code.png",  // Update this path
  // ...
}
```

**Note:** The path should start with `/` and reference the file in the `public` folder.

### How to Change Layout

- **Spacing**: Modify padding and margin values in the CSS files
- **Grid Layout**: Edit grid-template-columns in component CSS files
- **Font Sizes**: Adjust font-size values in CSS files

Each component has its own CSS file in `src/components/` for easy customization.

## 🚢 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts. For production deployment:
```bash
vercel --prod
```

### Method 2: GitHub Integration

1. Push your code to a GitHub repository

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will auto-detect Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Click "Deploy"

7. Your site will be live in seconds!

### Method 3: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in

2. Click "New Project"

3. Upload your project folder or connect to Git

4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Click "Deploy"

### Important Notes for Vercel Deployment

- ✅ No additional configuration needed - Vite works out of the box with Vercel
- ✅ The `dist` folder is automatically generated during build
- ✅ Environment variables (if needed) can be added in Vercel dashboard
- ✅ Custom domain can be added in project settings

## 📁 Project Structure

```
revonix-website/
├── public/                 # Static assets (QR code, images, etc.)
│   └── qr-code-placeholder.png
├── src/
│   ├── components/         # React components
│   │   ├── EventSection.jsx
│   │   ├── TopicsSection.jsx
│   │   ├── RulesSection.jsx
│   │   ├── RegistrationSection.jsx
│   │   └── Footer.jsx
│   ├── config.js          # ⭐ ALL EDITABLE CONTENT HERE
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # ⭐ COLOR VARIABLES HERE
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern, futuristic design
- ✅ Easy customization via config file
- ✅ CSS variables for theme colors
- ✅ Well-commented code for beginners
- ✅ Optimized for Vercel deployment
- ✅ Fast loading with Vite
- ✅ SEO-friendly structure

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables
- **JavaScript (ES6+)** - Modern JavaScript features

## 📞 Support

For questions or issues, contact: revonixofficial@gmail.com

## 📄 License

This project is created for Revonix Robotics Competition.

---

**Made with ❤️ for ROBO GENESIS 2026**

