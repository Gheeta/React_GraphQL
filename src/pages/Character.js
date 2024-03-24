import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";
import { useParams } from "react-router";

function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>something went wrong</p>;
  
  return (
    <div className="Character">
      <img src={data.character.image} alt={data.character.name} width={350} height={350} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name}- <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Character;
