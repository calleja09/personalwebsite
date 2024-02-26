module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      dropShadow: {
        neon: [
          "0 0 10px rgb(199 210 254)", 
          "0 0 30px rgb(67 56 202)"
        ]
      }
    },
  },
  plugins: [
  ],
}