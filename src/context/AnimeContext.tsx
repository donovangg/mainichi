import { createContext, useState } from "react";

interface AnimeWatchingContext {
  watching: any[];
  addWatching: (title: string, image_url: string, mal_id: number) => void;
}

const AnimeContext = createContext<AnimeWatchingContext>(
  {} as AnimeWatchingContext
);

export function AnimeProvider({ children }: { children: React.ReactNode }) {
  const [watching, setWatching] = useState([]);

  const addWatching = (title: string, image_url: string, mal_id: number) => {
    setWatching((prevState) => [...prevState, { title, image_url, mal_id }]);
  };

  return (
    <AnimeContext.Provider value={{ watching, addWatching }}>
      {children}
    </AnimeContext.Provider>
  );
}

export default AnimeContext;
