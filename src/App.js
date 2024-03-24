import "./App.css";


import React from "react";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import Search from "./pages/Search";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" Component={CharactersList} />
        <Route strict exact path="/search" Component={Search} />
        <Route strict exact path="/:id" Component={Character} />
      </Routes>
    </div>
  );
}

export default App;
