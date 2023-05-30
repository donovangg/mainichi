import React from "react";
import { useContext, useEffect } from "react";
import AnimeContext from "~/context/AnimeContext";
import WatchingCard from "./WatchingCard";

const WatchList: React.FC = () => {
  const { watching, getLocalWatchlist } = useContext(AnimeContext);
  console.log(watching);

  useEffect(() => {
    getLocalWatchlist();
  }, [])

  return (
    <section className="mx-auto w-11/12">
      <div className="">
        <ul className="flex w-full flex-wrap gap-5">
          {watching.length < 1 ? "add something!" : 
                 <>
                 {watching.map((w) => (
                   <div key={w.mal_id}>
                     <WatchingCard
                       title={w.title}
                       image_url={w.image_url}
                       url={w.url}
                       day={w.day}
                       timezone={w.timezone}
                       time={w.time}
                       mal_id={w.mal_id}
                     />
                   </div>
                 ))}
               </>
          }
   
        </ul>
      </div>
    </section>
  );
};

export default WatchList;
