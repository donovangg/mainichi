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
            className="h-64 w-full object-cover"
            src={ani.images.webp.image_url}
            alt={ani.title}
          />
        </div>
        <div className="flex">
          <button className="w-full border-2 border-red-500">Bookmark</button>
          <button className="w-full border-2 border-red-500">Bookmark</button>
        </div>
        <div className="h-16 p-2 overflow-hidden">
          <h2 className="break-words">{ani.title}</h2>
        </div>
      </div>
    </li>
  );
};

export default AnimeCard;
