import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      brightRed: "hsl(12, 88%, 59%)",
      darkBlue: "hsl(228, 39%, 23%)",
    },
    neutral: {
      darkGrayishBlue: "hsl(227, 12%, 61%)",
      veryDarkBlue: "hsl(233, 12%, 13%)",
      veryPaleRed: "hsl(13, 100%, 96%)",
      VeryLightGray: "hsl(0, 0%, 98%)",
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
