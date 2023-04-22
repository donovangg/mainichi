import React from "react";
import AnimeCard from "./AnimeCard";

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
  return (
    <section className="border-2 border-blue-700 w-full">
      <div className="w-11/12 mx-auto">
        <ul className="flex flex-wrap gap-4">
          {anime.map((ani) => (
            <AnimeCard ani={ani} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AnimeList;
