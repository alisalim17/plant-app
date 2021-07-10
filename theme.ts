export const theme = {
  fontFamily: {
    sans: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
    mono: ["Menlo", "Monaco", "Courier New", "monospace"],
  },
  fontSize: {
    tiny: 10,
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 26,
    "4xl": 36,
    "5xl": 48,
    "6xl": 64,
    "7xl": 80,
  },
  fontWeight: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  screens: {
    xs: "400px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  width: () => ({
    auto: "auto",
    full: "100%",
    // ...theme("spacing"),
    150: "150px",
    "1/6": "16%",
  }),

  colors: {
    transparent: "transparent",
    white: "#fff",
    black: "#323643",
    primary: "#0AC4BA",
    secondary: "#2BDA8E",
    accent: "#F3534A",
    tertiary: "#FFE358",
    gray: "#9DA3B4",
    gray2: "#C5CCD6",
  },
  minWidth: {
    0: "0",
    full: "100%",
  },
  maxWidth: () => ({
    none: "none",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    full: "100%",
    // ...breakpoints(theme("screens")),
  }),
  spacing: {
    0: 0,
    0.5: 3,
    1: 5,
    2: 10,
    3: 15,
    4: 20,
    5: 30,
    6: 40,
    7: 60,
    8: 75,
    9: 80,
    "5l": 160,
    "n1/2": "-50%",
    24: 24,
  },
  borderWidth: {
    none: "0px",
    default: "1px",
    2: "2px",
  },
  translate: () => ({
    // ...theme("spacing"),
    // ...negative(theme("spacing")),
    "-full": "-100%",
    "-1/2": "-50%",
    "1/2": "50%",
    "11/12": "91%",
    full: "100%",
  }),
  flex: {
    1: 1,
    2: 2,
    3: 3,
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none",
  },
  borderRadius: {
    // ...theme("spacing"),
    5: 5,
    10: 10,
    full: 999999,
  },
};
