/** @type {import('tailwindcss').Config} */

// ============================================
// TAILWIND CONFIGURATION
// ============================================
// This file configures Tailwind CSS.
// Most color changes should be made in
// src/index.css using CSS variables instead.
//
// Add custom animations, fonts, or breakpoints
// here as needed.
// ============================================

export default {
  // Tell Tailwind where to look for class names
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom font families
      // These are loaded via Google Fonts in index.html
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Chakra Petch', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      // Custom animations - used with Tailwind's animate- classes
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },

      // Keyframes for the custom animations above
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // Extended backdrop blur values
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
