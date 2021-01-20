/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import { ApolloProvider } from "react-apollo";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import Cookies from "js-cookie";
import ApolloClient from "apollo-boost";
import ClientRouter from "../app/components/ClientRouter";

import "../app/styles/App.css";

const client = new ApolloClient({
  fetchOptions: {
    credentials: "include",
  },
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const config = {
      apiKey: API_KEY,
      shopOrigin: Cookies.get("shopOrigin"),
      forceRedirect: true,
    };
    return (
      <>
        <Head>
          <title>Product Kings</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider i18n={translations}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </AppProvider>
      </>
    );
  }
}

export default MyApp;
