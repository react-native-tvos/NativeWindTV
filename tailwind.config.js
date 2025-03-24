export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: '#0a7ea4',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#0a7ea4',
    link: '#0a7ea4',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#a0a0a0',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#a0a0a0',
    link: '#0a7ea4',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  plugins: [],
  theme: {
    extend: {
      colors: {
        light: Colors.light,
        dark: Colors.dark,
      },
      fontSize: {
        s: '2vh',
        m: '3vh',
        l: '5vh',
        xl: '5vh',
        '2xl': '6vh',
        '3xl': '7vh',
      },
    },
  },
};
