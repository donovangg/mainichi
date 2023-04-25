import { createContext, useState } from "react";

interface AnimeWatchingContext {
  watching: any[];
  addWatching: (title: string) => void;
}

// const defaultState = {
//   watching: []
// };
const AnimeContext = createContext<AnimeWatchingContext>(
  {} as AnimeWatchingContext
);

export function AnimeProvider({ children }: { children: React.ReactNode }) {
  const [watching, setWatching] = useState([]);

  const addWatching = (title: string) => {
    setWatching((prevState) => [...prevState, { title }]);
  };

  return (
    <AnimeContext.Provider value={{ watching, addWatching }}>
      {children}
    </AnimeContext.Provider>
  );
}

export default AnimeContext;
