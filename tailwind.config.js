/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'tablet': {'max': '1023px'},
      'mobile': {'max': '639px'},
    },
    fontFamily: {
      'display': ['Aeonik', 'Arial', 'sans-serif'],
      'body': ['Satoshi', 'Arial', 'sans-seri'],
    },
    extend: {
      colors: {
        'body': '#111111',
      },
      keyframes: {
        'scale': {
          '0': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.5s ease-out",
        "accordion-up": "accordion-up 0.5s ease-out",
        'scale-up': 'scale 0.5s ease-out',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'link': 'cubic-bezier(.19,1,.22,1)',
        'anim-primary': 'cubic-bezier(0.62, 0.05, 0.01, 0.99);'
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}