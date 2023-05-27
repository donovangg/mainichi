import { type AppType } from "next/app";
import { AnimeProvider } from "~/context/AnimeContext";
import { SessionProvider } from "next-auth/react"

import Layout from "~/components/Layout";

import "~/styles/globals.css";
import { Session } from "next-auth";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: {session, ...pageProps },
}) => {

  return (
    <SessionProvider session={session}>
      <AnimeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimeProvider>
    </SessionProvider>
  );
};

export default MyApp;
