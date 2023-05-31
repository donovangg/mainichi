import { createContext, useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import   {db}   from '../firebase/firebase'

interface AnimeWatchingContext {
  watching: any[];
  addWatching: (
    title: string,
    image_url: string,
    mal_id: number,
    url: string,
    day: string,
    timezone: string,
    time: string
  ) => void;
  deleteWatching: (mal_id: any) => void;
}

const AnimeContext = createContext<AnimeWatchingContext>(
  {} as AnimeWatchingContext
);

export function AnimeProvider({ children }: { children: React.ReactNode }) {
  const [watching, setWatching] = useState([]);

  const addWatching = (
    title: string,
    image_url: string,
    mal_id: number,
    url: string,
    day: string,
    timezone: string,
    time: string
  ) => {
    setWatching((prevState) => [
      ...prevState,
      { title, image_url, mal_id, url, day, timezone, time },
    ]);
    setDoc(doc(db, "watchlist", "watching"), {
      anime: watching
    });
  };

  const deleteWatching = (mal_id) => {
    setWatching((prevState) => prevState.filter((a) => a.mal_id !== mal_id));
  };

  // Local storage

  const saveWatchlist = () => {
    localStorage.setItem("watching", JSON.stringify(watching));
  };

  const getLocalWatchlist = () => {
    if (localStorage.getItem("watching") === null) {
      localStorage.setItem("watching", JSON.stringify([]));
    } else {
    let localWatchlist = JSON.parse(localStorage.getItem("watching"));
    console.log(localWatchlist);
    setWatching(localWatchlist);
    }

  };

  return (
    <AnimeContext.Provider
      value={{
        watching,
        addWatching,
        deleteWatching,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

export default AnimeContext;
