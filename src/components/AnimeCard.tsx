import React from "react";
import CardDropdown from "./CardDropdown";

type AnimeCardProps = {
  ani: {
    title: string;
    mal_id: number;
    url: string;
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
  };
};

const AnimeCard: React.FC<AnimeCardProps> = ({ ani }) => {
  return (
    <li className="w-48 border-2 border-red-500">
      <div className="flex flex-col">
        <div>
          <img
            className="object-cover h-64 w-full"
            src={ani.images.webp.image_url}
            alt={ani.title}
          />
        </div>
        <div>
          <button className="border-2 border-red-500 w-full">Bookmark</button>
        </div>
        <div className="p-2">
          <h2 className="truncate">{ani.title}</h2>
        </div>
      </div>
    </li>
  );
};

export default AnimeCard;
