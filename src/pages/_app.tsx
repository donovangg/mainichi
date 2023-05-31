import { type AppType } from "next/app";
import { AnimeProvider } from "~/context/AnimeContext";
import { SessionProvider } from "next-auth/react";
import { AuthContextProvider } from "~/context/AuthContext";
import Layout from "~/components/Layout";
import "~/styles/globals.css";

const MyApp: AppType<{}> = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <AuthContextProvider>
      <AnimeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimeProvider>
    </AuthContextProvider>
  );
};

export default MyApp;
