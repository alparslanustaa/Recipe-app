import React, { useEffect, useState } from "react"
import './App.css';

const App = () => {
  //API STUFF
  const APP_ID = "66f8e97a";
  const APP_KEY = "a8747c363b12db76e9acd2207edc4ce6";

  const [recipes, setRecepies] = useState ([]);

  //use effect to run only one time
  useEffect(() => {
    getRecipes();
  }, []);

  //Recipes api function using await
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecepies(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input search="form" type="text" />
        <button
          className="search-button"
          type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default App;
