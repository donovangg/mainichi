import React, { useContext } from "react";
import { format, compareAsc } from "date-fns";
import AnimeCard from "./AnimeCard";
import AnimeContext from "~/context/AnimeContext";
import WatchList from "./WatchList";

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
};

const AnimeList: React.FC<AnimeProps> = ({ anime }) => {
  console.log(anime);
  const { watching } = useContext(AnimeContext);
  let today = format(new Date(), "EEEE");
  return (
    <section className="w-full flex flex-col gap-8 ">
      <section className="mx-auto w-10/12  bg-white rounded-md shadow-lg">
        <h2>Happy {today}! This is on today:</h2>
        <ul className="grid gap-4 my-4 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
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
      <section className="mx-auto w-10/12  bg-white rounded-md shadow-lg ">
        <h2>Monday</h2>
        <ul className="grid gap-4 my-4 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Mondays") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-10/12  bg-white rounded-md ">
        <h2>Tuesday</h2>
        <ul className="grid gap-4 my-4 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Tuesday") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-10/12  bg-white rounded-md ">
        <h2>Wednesday</h2>
        <ul className="grid gap-4 my-4 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Wednesdays") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-10/12  bg-white rounded-md ">
        <h2>Thursday</h2>
        <ul className="grid gap-4 my-4 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Thursdays") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-10/12  bg-white rounded-md ">
        <h2>Friday</h2>
        <ul className="grid gap-4 my-4 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Friday") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-10/12  bg-white rounded-md ">
        <h2>Saturday</h2>
        <ul className="grid gap-4 my-4 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Saturday") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-10/12  bg-white rounded-md ">
        <h2>Sunday</h2>
        <ul className="grid gap-4 my-4 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Sundays") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default AnimeList;
