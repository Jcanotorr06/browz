/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'main': 'var(--main)',
        'main-focus': 'var(--main-focus)',
        'card': 'var(--card)',
        'green-bubble': 'var(--green-bubble)',
        'purple-bubble': 'var(--purple-bubble)',
        'cyan-bubble': 'var(--cyan-bubble)',
        'blue-bubble': 'var(--blue-bubble)',
        'yellow-bubble': 'var(--yellow-bubble)',
        'pink-bubble': 'var(--pink-bubble)',
        'pattern': "var(--pattern)",
        'pixels-dark': "var(--pixels-dark)",
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [{
      win98: {              
      "primary": "#142C69",
      "secondary": "#494B4B",
      "accent": "#142A66",
      "neutral": "#C6CECF",
      "base-100": "#008081",
      "--main": "#C6CECF",
      "--main-focus": "#B8C2C3",
      "--card": "#FFFFFF",
      "--green-bubble": "#C3EAD5",
      "--purple-bubble": "#C8CAF3",
      "--cyan-bubble": "#AEDCF9",
      "--blue-bubble": "#C3D2F9",
      "--yellow-bubble": "#FFE5B5",
      "--pink-bubble": "#FFE1E7",
      "--pattern": "#FFFFFF0F",
      "--pixels-dark": "#FFFFFF",
      }
    }]
  }
}
