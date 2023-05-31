import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import AnimeContext from "~/context/AnimeContext";
import { useContext, useEffect } from "react";
import WatchList from "~/components/WatchList";
import { UserAuth } from '../../context/AuthContext'

interface animeProps {
  anime: {
    mal_id: number;
    url: string;
    title: string;
    images: {
      jpg: string;
      webp: {
        image_url: string;
      };
    };
    genres: [
      {
        name: string;
        url: string;
      }
    ];
    broadcast: {
      day: string;
    };
  }[];
  saveWatchlist: () => void;
  signedInUser: {
    displayName: string
}
}

const Home: NextPage<animeProps> = () => {
  const { watching, saveWatchlist, getLocalWatchlist } =
    useContext(AnimeContext);
    const { signedInUser, logOut, signInWithGoogle} = UserAuth();

  return (
    <>
      <Head>
        <title>Your Watchlist</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen  w-full flex-col items-center">
        <section className="mx-auto w-11/12 ">
          <div className="mx-auto  w-11/12  ">
            <h1 className="my-8 text-5xl" data-testid="watchlist-h1">
              Your watchlist
            </h1>
          </div>
          <div>
            {signedInUser ? <WatchList /> : "Sign in to add to your WatchList"}
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
