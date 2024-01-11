import React from "react";

const CharacterCard = ({ mal_id, name, role, voice_actors, image }) => {
  console.log(voice_actors);

  return (
    <div className="grid w-full grid-cols-2 overflow-x-hidden rounded-lg bg-white text-zinc-900">
      <div className="grid grid-cols-2">
        <div>
          <img className="h-auto w-32" src={image} alt={name} />
        </div>

        <div>
          <h3 className="ml-2 text-lg">{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <div className="flex justify-end">
        {voice_actors.length > 0 ? (
          <div className="grid grid-cols-2">
            <div className="mr-2">
              <h3 className="text-lg">{voice_actors[0].person.name}</h3>
              <p>{voice_actors[0].language}</p>
            </div>
            <div className="flex-2 flex justify-end">
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
