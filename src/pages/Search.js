import React, { useState } from "react";

import { useCharactersLocation } from "../hooks/useCharactersLocation";

function Search() {
  const [name, setName] = useState("");
  const { getLocations, data, error, loading } = useCharactersLocation(name);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>spinner...</div>}
      {error && <div>something went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Search;
