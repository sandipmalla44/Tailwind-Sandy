module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          reddish: '#ff306e'
        },
        green: {
          brightG: '#11f255'
        },
        blue: {
          bluish: '#5933d6'
        },
        voilet: {
          viol: '#9534eb'
        },
      },
      animation: {
        bounceOnce: "goShow 0.5s linear",
        bounceBack: "goDown 0.5s linear",
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        goShow: {
          "0%": { transform: 'scale(0)' },
          "50%": { transform: 'scale(0.5)' },
          "100%": { transform: 'scale(1)' }
        },
        goDown: {
          "0%": { transform: 'scale(1)' },
          "50%": { transform: 'scale(0.5)' },
          "100%": { transform: 'scale(0)' }
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
}
