import React from "react";
import { useContext } from "react";
import AnimeContext from "~/context/AnimeContext";

const WatchList: React.FC = () => {
  const { watching } = useContext(AnimeContext);
  return (
    <ul>
      <section>
        {watching.map((w) => (
          <li>{w.title}</li>
        ))}
      </section>
    </ul>
  );
};

export default WatchList;
