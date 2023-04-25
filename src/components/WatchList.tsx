import React from "react";
import { useContext } from "react";
import AnimeContext from "~/context/AnimeContext";
import WatchingCard from "./WatchingCard";



const WatchList: React.FC = () => {
  const { watching } = useContext(AnimeContext);
  console.log(watching);
  return (
    <section>
        <h2>Watching</h2>
      <div>
        <ul>
          <section>
            {watching.map((w) => (
              <WatchingCard title={w.title} image_url={w.image_url}/>
            ))}
          </section>
        </ul>
      </div>
    </section>
  );
};

export default WatchList;
