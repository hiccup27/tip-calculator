/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        vDarkCyan: 'hsl(183, 100%, 15%)',
        darkCyan: 'hsl(186, 14%, 43%)',
        cyan: 'hsl(184, 14%, 56%)',
        lightCyan: 'hsl(185, 41%, 84%)',
        vLightCyan: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
        primary: 'hsl(172, 67%, 45%)'
      }
    },
  },
  plugins: [],
}
