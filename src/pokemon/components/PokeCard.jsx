import { useState } from "react";
import "../../styles/PokeCard.css";
import { useEffect } from "react";

export default function PokeCard({ poke, id, getPokeData }) {
  const [types, setTypes] = useState([]);
  const [sprite, setSprite] = useState('');

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.split("").slice(1).join("")
  }

  useEffect(() => {
    async function loadTypes() {
      const data = await getPokeData();
      setSprite(data.sprites.front_default)
      setTypes(data.types.map(t => t.type.name));
    }

    loadTypes();
  }, []);


  let cardClass = 'pokeCard ' + types[0]

  return (
    <div className={cardClass}>
      <header>
        <h2>
          {capitalize(poke)}
        </h2>
        <h3>#{String(id).padStart(3, "0")} </h3>
      </header>
      <div className="relative">
        <div className="typesContainer">
          {types.map((i) => (
            <span key={i}>{capitalize(i)}</span>
          ))}
        </div>
        <figure style={ {zIndex: '1'} }>
          <img 
            alt={`${poke} image`} 
            src={sprite ? sprite : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8H1R_SAhdhNh1vaUFGjmSymzac8GgVrMkkg&s'}
            width={'150px'}></img>
        </figure>
        <img 
          className="pokeball"
          src={'../../../public/pokeball.jpg'}
          alt="pokeball image"
          width={'150px'}
        />
      </div>
    </div>
  );
}
