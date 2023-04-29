import React from "react";
import { useContext } from "react";
import AnimeContext from "~/context/AnimeContext";
import WatchingCard from "./WatchingCard";



const WatchList: React.FC = () => {
  const { watching } = useContext(AnimeContext);
  console.log(watching);
  return (
    <section>
      <div className="border-2 border-green-600 w-10/12 mx-auto">
        <ul className="flex flex-wrap gap-5">
          <>
            {watching.map((w) => (
              <WatchingCard title={w.title} image_url={w.image_url}/>
            ))}
          </>
        </ul>
      </div>
    </section>
  );
};

export default WatchList;
