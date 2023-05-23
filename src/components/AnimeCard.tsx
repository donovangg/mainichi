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
    broadcast: {
      day: string;
      time: string;
      timezone: string;
    };
  };
};

const AnimeCard: React.FC<AnimeCardProps> = ({ ani }) => {
  const { addWatching, watching } = useContext(AnimeContext);

  // so user can't keep adding
  let watchingAnime = watching.find((w) => w.mal_id === ani.mal_id);

  const watchButtonDisabled = watchingAnime ? true : false;

  return (
    <li className="w-48 overflow-hidden rounded-lg shadow-xl">
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
              addWatching(
                ani.title,
                ani.images.webp.image_url,
                ani.mal_id,
                ani.url,
                ani.broadcast.day,
                ani.broadcast.timezone,
                ani.broadcast.time
              )
            }
            disabled={watchButtonDisabled}
            data-testid="bookmark-btn"
            className={`flex w-full resize-none justify-center border border-blue-700 bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-700  ${
              watchButtonDisabled
                ? "cursor-not-allowed bg-blue-500 px-4 py-2 font-bold text-white opacity-50"
                : ""
            }`}
          >
            {watchButtonDisabled ? (
              "added"
            ) : (
              <FaRegBookmark className="text-xl" />
            )}
          </button>
          <button className="flex w-full items-center justify-center p-2">
            <a href={ani.url} target="_blank">
              <FaExternalLinkAlt className="text-xl" />
            </a>
          </button>
        </div>
        <div className="mt-4 h-16 overflow-hidden p-2">
          <h2 className="break-words" data-testid="title-h2">
            {ani.title}
          </h2>
        </div>
      </div>
    </li>
  );
};

export default AnimeCard;
