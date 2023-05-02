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
    <li className="w-48 rounded-lg overflow-hidden shadow-xl">
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
            onClick={() =>
              addWatching(ani.title, ani.images.webp.image_url, ani.mal_id)
            }
            disabled={watchButtonDisabled}
            className={`bg-blue-500 w-full flex justify-center resize-none hover:bg-blue-700 text-white text-sm py-2 px-4 border border-blue-700  ${
              watchButtonDisabled ? "bg-blue-500 text-white font-bold py-2 px-4 opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {watchButtonDisabled ? "added"  : <FaRegBookmark className="text-xl" />}
          </button>
          <button className="flex w-full items-center p-2 justify-center  ">
            <FaExternalLinkAlt className="text-xl" />
          </button>
        </div>
        <div className="h-16 overflow-hidden mt-4 p-2">
          <h2 className="break-words">{ani.title}</h2>
        </div>
      </div>
    </li>
  );
};

export default AnimeCard;
