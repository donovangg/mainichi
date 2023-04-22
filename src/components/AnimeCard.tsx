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
    <li className="border-2 w-48 border-red-500">
      <div>
        <div>
            <img className="object-cover" src={ani.images.webp.image_url} alt={ani.title} />
        </div>
        <h2 className="truncate">{ani.title}</h2>
      </div>
    </li>
  );
};

export default AnimeCard;
