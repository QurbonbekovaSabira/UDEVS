/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          descktop: "1140px",
        },
        padding: "20px",
      },
      screens: {
        phone: "300px",
        mobile: "500px",
        tablet: "901px",
        descktop: "1200px",
      },
      colors: {
        primary: "#1b5bf7",
        "pale-blue": "#c6d6ff",
        secondary: "#464359",
        "whisper-blue": "#e5e9f2",
        husky: "#e0e8ff",
        "river-styx": "#18191f",
        "ma-white": "#f4f7ff",
        "black-light": "rgba(0, 0, 0, .4)",
        "smashing-pumpkins": "#FF5722",
        customcolor: {
          DEFAULT: "#1b5bf7",
        },
      },
      boxShadow: {
        "3xl": "0 1px 0 #e5e9f2",
      },
      backgroundImage: {
        "body-bg": "url(/img/body-bg.jpg)",
        "technologies-bg": "url(/img/technolies-bg2.png)",
      },
      backgroundColor: {
        "daisy-primary": "transparent",
        "daisy-secondary": "transparent",
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "transparent",
          secondary: "transparent",
          extend: {},
        },
      },
    ],
  },
};
