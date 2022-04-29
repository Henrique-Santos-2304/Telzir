export default {
  grid: {
    container: "100vw",
    containerContent: "78rem",
  },
  media: {
    small: "376px",
    xsmall: "480px",
    medium: "620px",
    xmedium: "768px",
    large: "980px",
    full: "1128px",
  },
  colors: {
    primary: "#251D3A",
    primaryLight: "#2A2550",
    secondary: "#E04D01",
    secondaryLight: "#FF7700",

    error: "#DA1212",

    lightColor: "#e1e1e1",
    darkColor: "#1e1e1e",
  },
  font: {
    family: {
      Poppins: "'Poppins', sans-serif",
      Tangerine: "'Tangerine', cursive",
      Roboto: '"Roboto", monospace',
    },
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
      xbiglarge: "3rem",
      xxbiglarge: "3.4rem",
    },
    light: 300,
    normal: 500,
    bold: 700,
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
} as const;
