import React, { useEffect, useState } from "react"
import './App.css';

const App = () => {
  //API STUFF
  const APP_ID = "66f8e97a";
  const APP_KEY = "a8747c363b12db76e9acd2207edc4ce6";
  const exampleRequest =
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  //state stuff
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect test run');
  })

  return (
    <div className="App">
      <form className="search-form">
        <input search="form" type="text" />
        <button
          onClick={() => setCounter(counter + 1)}
          className="search-button"
          type="submit">
            {counter}
        </button>
      </form>
    </div>
  )
}

export default App;
