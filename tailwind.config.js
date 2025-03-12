/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./dist/index.html", 
      "./src/**/*.{js}", 
    ],
    theme: {
      extend: {
        colors: {
          primary: "var(--color-primary)", 
          paleyellow: "var(--color-paleyellow)",
          
        },
      },
    },
    plugins: [],
  };
  