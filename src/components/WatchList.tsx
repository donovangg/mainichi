import React from "react";
import { useContext, useEffect, useState } from "react";
import AnimeContext from "~/context/AnimeContext";
import { UserAuth } from "~/context/AuthContext";
import WatchingCard from "./WatchingCard";
import Link from "next/link";
import { db } from "~/firebase/firebase";
import {
  updateDoc,
  doc,
  onSnapshot,
  getDoc,
  collection,
} from "firebase/firestore";

const WatchList: React.FC = () => {
  const { signedInUser } = UserAuth();
  const { watching, setWatching } = useContext(AnimeContext);
  const [animeList, setAnimeList] = useState([]);
  const usersCollectionRef = collection(db, "Users");
  const animeRef = doc(db, "users", `${signedInUser?.email}`);
  // console.log(watching);
  // console.log(usersCollectionRef);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${signedInUser?.email}`), (doc) => {
      setAnimeList(doc.data()?.savedAnime);
    });
  }, [signedInUser?.email]);

  const deleteAnime = (mal_id) => {
    try {
      const result = animeList.filter((ani) => ani.mal_id !== mal_id);
      updateDoc(animeRef, {
        savedAnime: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mx-auto py-12">
      {animeList.length < 1 ? "" : <h2 className="py-14 text-6xl">Watching</h2>}
      <div className="mx-auto">
        <ul className="mx-auto flex w-full flex-col flex-wrap items-center gap-5 border-2 border-green-600 lg:flex-row lg:items-start">
          {animeList.length < 1 ? (
            <div className="mx-auto flex flex-col items-center justify-center py-12">
              <h2 className="text-4xl">All alone here. Add something!</h2>
              <Link
                href="/"
                className="my-4 px-4 py-2 text-3xl text-pink-600 duration-150 hover:text-pink-500 hover:ease-in"
              >
                View Schedule
              </Link>
              <img src="/assets/hitori.gif" alt="bocchi sad" />
            </div>
          ) : (
            <>
              {animeList.map((ani) => (
                <div key={ani.mal_id}>
                  <WatchingCard
                    title={ani.title}
                    image_url={ani.image_url}
                    url={ani.url}
                    day={ani.day}
                    timezone={ani.timezone}
                    time={ani.time}
                    mal_id={ani.mal_id}
                    deleteAnime={deleteAnime}
                    setWatching={setWatching}
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
