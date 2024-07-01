/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "istok-web": ["Istok Web", "sans-serif"],
        'ibm': ['IBM Plex Sans Thai Looped'],
        'montserrat': ["Montserrat", "sans-serif"],
        'onest' : ["OwnOnest"]
      },
      height: {
        
      },
      width: {
        
      },
      screens: {
        xs: "360px",
        xs2: "450px",
        sm: "576px",
        md: "768px",
        md2: "1000px",
        lg: "1280px",
        xl: "1600px",
        "2xl": "1920px",
      },
      fontSize: {
      },
      colors: {
        'bg-black': '#1A1A1A',
        'bg-light': '#28282A',
        'bg-grey': '#363638',
        'bg-body': '#212123',
        'text' : '#F9F9F9',
        'text-light' : '#909090',
        'stroke-light' : '#666666',
        'pink': '#FFBCAD',
        'light-pink': '#FFB6C1',
        'blue-titanium': '#5f778a',
        'dark-titanium': '#54544e',
        'naturel-titanium': '#878681',
        'ellipse': '#D9D9D9',
        'violet': '#814ADC',
        'violet-light': "#D6B4FC",
        'purple': '#6D3FB8'
        
      },
      gradientColorStops: {
        
      },
      borderRadius: {
        
      },
      backgroundImage: {
      },
      extend: {
        textStyles: {
          'custom': {
            base: 'text-black text-xl font-semibold'
          }
        }
      }
    },
  },
  plugins: [
  ],
};
