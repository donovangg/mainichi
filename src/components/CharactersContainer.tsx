import React from "react";
import CharacterCard from "./CharacterCard";

const CharactersContainer = ({ characters }) => {
  console.log(characters);
  return (
    <div className="ml-4 w-full">
      <h2 className="my-2 text-2xl text-zinc-900">Cast and Characters</h2>
      {characters.data.slice(0, 6).map((character) => (
        <div className="my-2 md:w-10/12">
          {/* {character.character.name} */}
          <CharacterCard
            mal_id={character.character.name}
            role={character.character.role}
            name={character.character.name}
            voice_actors={character.voice_actors}
            image={character.character.images.webp.image_url}
          />
        </div>
      ))}
      {/* <CharacterCard /> */}
    </div>
  );
};

export default CharactersContainer;
