import React from "react"
import './App.css';

const App = () => {

  const APP_ID = "66f8e97a";
  const APP_KEY = "a8747c363b12db76e9acd2207edc4ce6";
  const exampleRequest = 
  "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}";

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  )
}

export default App;
