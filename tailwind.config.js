/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brown: '#5b514a',
      blak: '#3c3c3c',
      circle: '#262626',
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
    },
    extend: {
      backgroundImage: {
        'logooficial': "url('/LogoOficialCut.png')",
        'capivara': "url('/capivara.png')",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        body: ['Inter'],
        sans: ['Inter'],  
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}
