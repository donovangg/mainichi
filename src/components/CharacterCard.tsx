import React from "react";

const CharacterCard = ({ mal_id, name, role, voice_actors, image }) => {
  console.log(voice_actors);

  return (
    <div className="grid w-full grid-cols-2 border-2 border-orange-600">
      <div className="flex border-2 border-pink-600">
        <div>
          <img className="h-auto w-32" src={image} alt={name} />
        </div>

        <div>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <div className="flex justify-end border-4 border-purple-600">
        {voice_actors.length > 0 ? (
          <div className="flex">
            <div>
              <h3>{voice_actors[0].person.name}</h3>
              <p>{voice_actors[0].language}</p>
            </div>
            <div className="flex justify-end border-2 border-orange-600">
              <img
                className="right-0 h-auto w-32"
                src={voice_actors[0].person.images.jpg.image_url}
                alt={voice_actors[0].person.name}
              />
            </div>
          </div>
        ) : (
          <div>No voice actors found</div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
