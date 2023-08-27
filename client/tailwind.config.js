/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundColor: {
        'space-900': '#06090f', // Dark background
        'space-100': '#202838', // Light background
      },
      gradientColorStops: {
        'space-900': '#06090f', // Dark background
        'space-100': '#202838', // Light background
      },
    },
  },
  plugins: [],
}

