import { type AppType } from "next/app";
import { AnimeProvider } from "~/context/AnimeContext";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { useRouter } from "next/router";

import Layout from "~/components/Layout";

import "~/styles/globals.css";

const publicPages = ["/"];

const MyApp: AppType<{ null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  const { pathname } = useRouter();

  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider {...pageProps}>
      <AnimeProvider>
        {isPublicPage ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <>
            <SignedIn>
              <Layout>
              <Component {...pageProps} />
              </Layout>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}
      </AnimeProvider>
    </ClerkProvider>
  );
};

export default MyApp;
