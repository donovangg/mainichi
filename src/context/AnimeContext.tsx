import { createContext, useState } from "react";

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
  };

  const deleteWatching = (mal_id) => {
    setWatching((prevState) => prevState.filter((a) => a.mal_id !== mal_id));
  };

  return (
    <AnimeContext.Provider value={{ watching, addWatching, deleteWatching }}>
      {children}
    </AnimeContext.Provider>
  );
}

export default AnimeContext;
