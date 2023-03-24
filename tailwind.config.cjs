/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin::-webkit-scrollbar': {
          position: 'absolute',
          width: '5px',
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          backgroundColor: '#f5f5f5',
          borderRadius: '9999px',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          backgroundColor: '#999',
          borderRadius: '9999px',
          transition: 'background-color 0.2s ease-in-out',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#888',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },
  ],
};
