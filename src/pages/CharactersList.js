import React from "react";

import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>spinner.....</div>;
  if (error) return <div>something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={character.id} key={character.id}>
            <img src={character.img} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default CharactersList;
