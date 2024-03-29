import { type NextPage } from "next";
import Head from "next/head";
import AnimeList from "~/components/AnimeList";
import { format } from "date-fns";
import Header from "~/components/Header";

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

  let imgSrc: "assets/your-name.jpeg";
  return (
    <>
      <Head>
        <title>Anime for {today}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AnimeList today={today} anime={anime} week={week} />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.jikan.moe/v4/seasons/2024/winter");
  const data = await res.json();
  const anime = data.data;

  return { props: { anime } };
}

export default Home;
