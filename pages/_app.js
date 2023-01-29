// `pages/_app.js`
import '../styles/global.css';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from "/Users/derrickxu/Repo/nextjs-blog/src/aws-exports.js"

import "@aws-amplify/ui-react/styles.css";

import {studioTheme } from "/Users/derrickxu/Repo/nextjs-blog/src/ui-components"

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={studioTheme}> <Component {...pageProps} /> </ThemeProvider>;
}
