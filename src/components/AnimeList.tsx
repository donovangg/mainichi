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
      <div className="mx-auto w-11/12">
        {/* <ul className="flex flex-wrap gap-4">
          {anime.map((ani) => (
            <AnimeCard ani={ani} />
          ))}
        </ul> */}
        <ul>
          {anime.map((ani) => (
            <div>
              {ani.broadcast.day.includes(today) ? <AnimeCard ani={ani} /> : ""}
            </div>
          ))}
        </ul>
      </div>
      <WatchList />
    </section>
  );
};

export default AnimeList;
