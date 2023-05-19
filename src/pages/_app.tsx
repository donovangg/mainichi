import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AnimeProvider } from "~/context/AnimeContext";
import Layout from "~/components/Layout";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
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
