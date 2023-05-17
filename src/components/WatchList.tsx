import React from "react";
import { useContext } from "react";
import AnimeContext from "~/context/AnimeContext";
import WatchingCard from "./WatchingCard";

const WatchList: React.FC = () => {
  const { watching } = useContext(AnimeContext);
  console.log(watching);
  return (
    <section>
      <div className="mx-auto w-11/12 border-2 border-green-600">
        <ul className="flex flex-wrap gap-5">
          <>
            {watching.map((w) => (
              <WatchingCard
                title={w.title}
                image_url={w.image_url}
                url={w.url}
                day={w.day}
                timezone={w.timezone}
                time={w.time}
                mal_id={w.mal_id}
              />
            ))}
          </>
        </ul>
      </div>
    </section>
  );
};

export default WatchList;
