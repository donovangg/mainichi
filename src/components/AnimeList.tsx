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

  return (
    <section className="flex w-full flex-col gap-8 pt-16 ">
      <section className="mx-auto w-10/12 rounded-md  bg-white p-4 shadow-lg">
        <h2 className="text-3xl" data-testid="h2-element">
          Happy {today}! It&apos;s the Summer!{" "}
        </h2>
        <h3 className="text-2xl">Here&apos;s your simulcasts:</h3>
        <ul className="my-4 flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
          {anime.map((ani) => (
            <React.Fragment key={ani.mal_id}>
              {ani.broadcast.day == dayAnime ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
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
