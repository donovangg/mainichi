import React, { useContext } from "react";
import { format, compareAsc } from "date-fns";
import AnimeCard from "./AnimeCard";
import AnimeContext from "~/context/AnimeContext";
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
  week: {
    id: number,
    day: string
  }[]
};

const AnimeList: React.FC<AnimeProps> = ({ anime, week }) => {
  console.log(anime);
  const { watching } = useContext(AnimeContext);
  let today = format(new Date(), "EEEE");

  return (
    <section className="flex w-full flex-col gap-8 ">
      <section className="mx-auto w-10/12  rounded-md bg-white shadow-lg">
        <h2>Happy {today}! This is on today:</h2>
        <ul className="my-4 grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes(today) ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
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
