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

  return (
    <div className="pokeCard">
      <header>
        <h2>
          {capitalize(poke)}
        </h2>
        <h3>#{String(id).padStart(3, "0")} </h3>
      </header>
      <div>
        <div className="typesContainer">
          {types.map((i) => (
            <span key={i}>{capitalize(i)}</span>
          ))}
        </div>
        <figure>
          <img 
            alt={`${poke} image`} 
            src={sprite}
            width={'150px'}></img>
        </figure>
      </div>
    </div>
  );
}
