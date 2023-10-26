import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeListDay = ({ anime, day }) => {
  return (
    <section className="mx-auto w-10/12 rounded-md  bg-white p-4 shadow-lg ">
      <h2 className="text-center text-3xl sm:text-left">{day}</h2>
      <ul className="my-4 flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
        {anime.map((ani: any) => (
          <React.Fragment key={ani.mal_id}>
            {ani.broadcast.day == day ? (
              <AnimeCard key={ani.mal_id} ani={ani} />
            ) : (
              ""
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default AnimeListDay;
