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
  const { watching } = useContext(AnimeContext);
  let today = format(new Date(), "EEEE");
  return (
    <section className="w-full border-2 border-blue-700">
      <section className="mx-auto w-11/12 border-2 border-red-600">
        {/* <ul className="flex flex-wrap gap-4">
          {anime.map((ani) => (
            <AnimeCard ani={ani} />
          ))}
        </ul> */}
        Hello It is {today}
        <ul className="flex flex-wrap gap-4">
          {anime.map((ani) => (
            <div key={ani.mal_id}>
              {ani.broadcast.day.includes(today) ? <AnimeCard ani={ani} /> : ""}
            </div>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-11/12 border-2 border-green-600">
        <ul className="flex list-none flex-wrap items-center justify-center gap-2">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Monday") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-11/12 border-2 border-green-600">
        <ul className="flex list-none flex-wrap items-center justify-center gap-2">
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
      <section className="mx-auto w-11/12 border-2 border-green-600">
        <ul className="flex list-none flex-wrap items-center justify-center gap-2">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Wednesday") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-11/12 border-2 border-green-600">
        <ul className="flex list-none flex-wrap items-center justify-center gap-2">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Thursday") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>
      <section className="mx-auto w-11/12 border-2 border-green-600">
        <ul className="flex list-none flex-wrap items-center justify-center gap-2">
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
      <section className="mx-auto w-11/12 border-2 border-green-600">
        <ul className="flex list-none flex-wrap items-center justify-center gap-2">
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
      <section className="mx-auto w-11/12 border-2 border-green-600">
        <ul className="flex list-none flex-wrap items-center justify-center gap-2">
          {anime.map((ani) => (
            <>
              {ani.broadcast.day.includes("Sunday") ? (
                <AnimeCard key={ani.mal_id} ani={ani} />
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
      </section>

      <WatchList />
    </section>
  );
};

export default AnimeList;
