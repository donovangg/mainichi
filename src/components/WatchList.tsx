import React from "react";
import { useContext, useEffect } from "react";
import AnimeContext from "~/context/AnimeContext";
import WatchingCard from "./WatchingCard";
import Link from "next/link";

const WatchList: React.FC = () => {
  const { watching } = useContext(AnimeContext);
  console.log(watching);

  return (
    <section className="mx-auto w-11/12 py-12">
      {watching.length < 1 ? "" : <h2 className="py-14 text-6xl">Watching</h2>}
      <div className="mx-auto">
        <ul className="flex w-full flex-wrap gap-5">
          {watching.length < 1 ? (
            <div className="flex mx-auto flex-col items-center justify-centerpy-12">
              <h2 className="text-4xl">All alone here. Add something!</h2>
              <Link
                href="/"
                className="my-4 text-3xl text-pink-600 hover:bg-pink-500 px-4 py-2 duration-150 hover:ease-in hover:text-white"
              >
               View Schedule
              </Link>
              <img src="/assets/hitori.gif" alt="bocchi sad" />
            </div>
          ) : (
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
          )}
        </ul>
      </div>
    </section>
  );
};

export default WatchList;
