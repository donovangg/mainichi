import React from "react";

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
    <li className="border-2 border-red-500">
      <div>
        <h2>{ani.title}</h2>
      </div>
    </li>
  );
};

export default AnimeCard;
