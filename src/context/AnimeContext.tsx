import { createContext, useState } from "react";

const AnimeContext = createContext({});

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
