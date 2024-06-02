import React, { useState, useEffect } from 'react'
import Char from './char'
import App from './App'


function Character({character}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showPlanet, setShowPlanet] = useState(false);

  const togglePlanet = () => {
    setShowPlanet(prevShowPlanet => !prevShowPlanet);
  };
  
  return (
    <div className="character-card" onClick={togglePlanet}>
      <h2 className="character-name">{character.name}</h2>
      {showPlanet && <p className="character-planet">{character.planet}</p>}
    </div>
  ); 
}


export default Character
