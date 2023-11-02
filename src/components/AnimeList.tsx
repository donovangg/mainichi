import React, { useContext } from "react";
import AnimeCard from "./AnimeCard";
import AnimeListDay from "./AnimeListDay";

type AnimeProps = {
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
  today: string;
};

const AnimeList: React.FC<AnimeProps> = ({ anime, week, today }) => {
  // This variable exists because I needed to add a 'S' to today so it matched with the
  //property e.g today = tuesday, dayAnime = tuesdays
  let dayAnime = `${today}s`;
  const slicedAnime = anime.slice(0,6);

  return (
    <section className="flex w-full flex-col gap-8 pt-16 ">
      <section className="mx-auto w-5/6 border-2 border-green-600 lg:w-4/6">
        <div className="border-2 border-pink-600 flex items-center justify-between">
        <h2 className="text-3xl" data-testid="h2-element">
          Fall 2023
        </h2>
        <a href="">
          View All
        </a>
        </div>
        <ul className="my-4 flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
          {slicedAnime.map((ani) => (
            <React.Fragment key={ani.mal_id}>
             <AnimeCard key={ani.mal_id} ani={ani} />
            </React.Fragment>
          ))}
        </ul>
      </section>

      {week.map((w) => (
        <AnimeListDay key={w.id} anime={anime} day={w.day} />
      ))}
    </section>
  );
};

export default AnimeList;
