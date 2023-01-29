// `pages/_app.js`
import "../styles/global.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsconfig from "../src/aws-exports.js";

import "@aws-amplify/ui-react/styles.css";

import { studioTheme } from "../src/ui-components";

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={studioTheme}>
      {" "}
      <Component {...pageProps} />{" "}
    </ThemeProvider>
  );
}
