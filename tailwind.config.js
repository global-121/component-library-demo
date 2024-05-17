/** @type {import('tailwindcss').Config} */
import { info } from "autoprefixer";
import daisyui from "daisyui";

const theme = {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    purple: {
      DEFAULT: "#4F22D7",
      50: "#F8F6FF",
      100: "#EEEBFF",
      300: "#CFBFFF",
      500: "#B39AFF",
      600: "#7355ED",
      700: "#4F22D7",
      900: "#361A8C",
    },
    grey: {
      100: "#F4F7FA",
      300: "#D3DAE0",
      500: "#8A95A0",
      700: "#4F5763",
    },
    blue: {
      100: "#E9F2FF",
      500: "#0B4EC7",
      700: "#0E2A87",
    },
    green: {
      100: "#E4F4E0",
      500: "#368704",
      700: "#1D5701",
    },
    orange: {
      100: "#FFF0CD",
      500: "#DA7C00",
      700: "#7A2D00",
    },
    red: {
      100: "#FFE3E3",
      500: "#C70000",
      700: "#940000",
    },
    yellow: {
      100: "#FFF6C6",
      500: "#FFD601",
      700: "#665606",
    },
    navy: "#00214D",
    white: "#FFFFFF",
    black: {
      DEFAULT: "#0F1218",
    },
  },
};

export default {
  content: ["./src/**/*.{html,ts}"],
  plugins: [daisyui],
  theme,
  daisyui: {
    themes: [
      {
        theme510: {
          primary: theme.colors.purple.DEFAULT,
          "primary-content": theme.colors.white,
          neutral: theme.colors.black,
          "neutral-content": theme.colors.white,
          "base-100": theme.colors.grey[100],
          "base-200": theme.colors.grey[300],
          "base-300": theme.colors.grey[500],
          info: theme.colors.blue[100],
          "info-content": theme.colors.blue[700],
          success: theme.colors.green[100],
          "success-content": theme.colors.green[700],
          warning: theme.colors.yellow[100],
          "warning-content": theme.colors.yellow[700],
          error: theme.colors.red[100],
          "error-content": theme.colors.red[700],
        },
      },
    ],
  },
};
