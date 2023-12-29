import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  // Put mantine theme overrides here...
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default App;
