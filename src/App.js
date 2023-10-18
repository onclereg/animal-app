

import './App.css';
import Animals from './Animals';
import { useState } from 'react';

function randomAnimals (){
  const animalList = ["beer","dog","eagle","elephant","fox","panda","sheep","tiger","tortoise"]

  return animalList[Math.floor(Math.random() * animalList.length)]  
};
console.log(randomAnimals)


function App() {

  const[view , setView] = useState([]);
  
  function handleClick(){
   return setView([...view,randomAnimals()])
  } ; 

  const renderedAnimalList = view.map((animal,index)=>{
    return <Animals type={animal} key={index}/>}
  );
  return (
    <div className="App">
      <div className='buttonDiv'>
            <button onClick={handleClick}className='button'>
              Add Animals
            </button>
      </div>
      <div >
        <div className='rendered'>
          {renderedAnimalList}
        </div>
      </div>
    </div>
  );
}

export default App;
