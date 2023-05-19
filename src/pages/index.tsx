import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import AnimeList from "~/components/AnimeList";
import { AnimeProvider } from "~/context/AnimeContext";
import Navbar from "~/components/Navbar";
import { format, compareAsc } from "date-fns";

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
    broadcast: {
      day: string;
      time: string;
      timezone: string;
      string: string;
    };
  }[];
  week: {
    id: number;
    day: string;
  }[];
}

const Home: NextPage<animeProps> = ({ anime }) => {
  let today = format(new Date(), "EEEE");

  let week = [
    { id: 1, day: "Mondays" },
    { id: 2, day: "Tuesdays" },
    { id: 3, day: "Wednesdays" },
    { id: 4, day: "Thursdays" },
    { id: 5, day: "Fridays" },
    { id: 6, day: "Saturdays" },
    { id: 7, day: "Sundays" },
  ];
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimeList today={today} anime={anime} week={week} />
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.jikan.moe/v4/seasons/2023/spring");
  const data = await res.json();
  const anime = data.data;

  return { props: { anime } };
}

export default Home;
