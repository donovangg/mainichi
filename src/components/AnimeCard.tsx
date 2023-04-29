import React from "react";
import AnimeContext from "~/context/AnimeContext";
import { useContext } from "react";
import { FaRegBookmark, FaExternalLinkAlt } from "react-icons/fa";

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
  const { addWatching, watching } = useContext(AnimeContext);

  // so user can't keep adding
  let watchingAnime = watching.find((w) => w.mal_id === ani.mal_id);

  const watchButtonDisabled = watchingAnime ? true : false;

  return (
    <li className="w-48  ">
      <div className="flex flex-col">
        <div>
          <img
            className="h-64 w-full object-cover"
            src={ani.images.webp.image_url}
            alt={ani.title}
          />
        </div>
        <div className="flex">
          <button
            onClick={() => addWatching(ani.title, ani.images.webp.image_url, ani.mal_id)}
            disabled={watchButtonDisabled}
            className={`flex w-full items-center justify-center p-1 ${watchButtonDisabled ? 'bg-red-600': 'bg-green-600'}`}
          >
            add
            <FaRegBookmark />
          </button>
          <button className="flex w-full items-center justify-center  ">
            <FaExternalLinkAlt />
          </button>
        </div>
        <div className="h-16 overflow-hidden p-2">
          <h2 className="break-words">{ani.title}</h2>
        </div>
      </div>
    </li>
  );
};

export default AnimeCard;
