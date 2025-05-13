module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        dark: {
          DEFAULT: '#1e293b',
          light: '#334155',
          lighter: '#64748b',
        },
        light: {
          DEFAULT: '#f8fafc',
          dark: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        display: ['"Bangers"', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'tilt': 'tilt 10s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/public/assets/images/backgrounds/hero-bg.jpg')",
        'game-pattern': "#34495e",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: '#6366f1',
//           light: '#818cf8',
//           dark: '#4f46e5',
//         },
//         secondary: {
//           DEFAULT: '#10b981',
//           light: '#34d399',
//           dark: '#059669',
//         },
//         accent: {
//           DEFAULT: '#f59e0b',
//           light: '#fbbf24',
//           dark: '#d97706',
//         },
//         dark: {
//           DEFAULT: '#1e293b',
//           light: '#334155',
//           lighter: '#64748b',
//         },
//         light: {
//           DEFAULT: '#f8fafc',
//           dark: '#e2e8f0',
//         },
//         hero: '#2c3e50', // Added hero background color
//         game: '#34495e', // Added game background color
//       },
//       fontFamily: {
//         sans: ['"Poppins"', 'sans-serif'],
//         display: ['"Bangers"', 'cursive'],
//       },
//       animation: {
//         'pulse-slow': 'pulse 3s infinite',
//         'float': 'float 6s ease-in-out infinite',
//         'bounce-slow': 'bounce 2s infinite',
//         'tilt': 'tilt 10s infinite linear',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//         tilt: {
//           '0%, 50%, 100%': { transform: 'rotate(0deg)' },
//           '25%': { transform: 'rotate(2deg)' },
//           '75%': { transform: 'rotate(-2deg)' },
//         },
//         // Removed backgroundImage section
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
// }