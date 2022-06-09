import React, { useState } from "react";
import './App.css';
import DogDisplay from './components/DogDisplay';
import Button from './components/Button';

function App() {
  const [dogSrc, setDogSrc] = useState({});
 //Function to getDogs
 const getDog = async () => {
  // make fetch request and store response
  const response = await fetch(
    `https://dog.ceo/api/breeds/image/random`
    );
    // Parse JSON response into a javascript object
  const data = await response.json();
  //set the Movie state to the movie
  setDogSrc(data);
 };
  //This will run on the first render but not on subsquent renders

  return (
    <div className="App">
      <h1>Doggies</h1>
      <Button handleSubmitFromApp={getDog}/>
      {dogSrc.message ?
      <DogDisplay dogSrc={dogSrc}/>
      :
      <h2>Random Dogs!</h2>
    }
    </div>
  );
}

export default App;
