import React from "react";

const CharacterCard = ({ mal_id, name, role, voice_actors, image }) => {
  console.log(voice_actors);

  return (
    <div>
      <div>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <div>
        {voice_actors.length > 0 ? (
          <div>
            <div>
              <h3>{voice_actors[0].person.name}</h3>
              <p>{voice_actors[0].language}</p>
            </div>
            <div>
              <img
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
