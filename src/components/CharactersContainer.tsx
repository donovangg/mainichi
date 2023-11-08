import React from "react";
import CharacterCard from "./CharacterCard";

const CharactersContainer = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      <h2>Characters Container</h2>
      {characters.data.slice(0, 6).map((character) => (
        <div className="border-2 border-blue-600 md:w-8/12">
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
