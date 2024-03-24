import React, { useState } from "react";
import { useProductMutation } from "../hooks/useProductMutation";

export default function Mutation() {
  const [name, setName] = useState("");
  const { getProductName, error, loading, data } = useProductMutation(
    name,
    "3"
  );

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getProductName()}>Search</button>
      {loading && <div>spinner...</div>}
      {error && <div>Something want wrong</div>}
    </div>
  );
}
