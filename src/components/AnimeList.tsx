import React, { useContext } from "react";
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
    broadcast: {
      day: string;
      time: string,
      timezone: string,
      string: string
    };
  }[];
  week: {
    id: number,
    day: string
  }[]
  today: string
};

const AnimeList: React.FC<AnimeProps> = ({ anime, week, today }) => {
  console.log(anime);
  const { watching } = useContext(AnimeContext);

  return (
    <section className="flex w-full flex-col gap-8 ">
      <section className="mx-auto w-10/12 p-4  rounded-md bg-white shadow-lg">
        <h2 className="text-3xl" data-testid="h2-element">Happy {today}! It&apos;s the Spring season! </h2>
        <h3 className="text-2xl">Here&apos;s your simulcasts:</h3>
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
