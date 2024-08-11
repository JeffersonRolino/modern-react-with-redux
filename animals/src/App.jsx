import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal(){
  const animals = ['bird', 'cat', 'cow', 'dog', 'aligator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }

  return (
   <div>
    <button onClick={handleClick} >Add Animal</button>
    {animals.map((animal, index) => {
      return <AnimalShow key={index} type={animal}/>
    })}
   </div>
  )
}

export default App
