import { useState } from "react";
import "../../styles/PokeCard.css";
import { useEffect } from "react";

const pokeCache = {};

export default function PokeCard({ poke, getPokeData }) {

  const cached = pokeCache[poke];

  const [types, setTypes] = useState(cached?.types || []);
  const [id, setId] = useState(cached?.id || 1);
  const [sprite, setSprite] = useState(cached?.sprite || 'https://assets.pokeos.com/pokemon/home/render/201-a.png');

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.split("").slice(1).join("")
  }

  useEffect(() => {
    if (pokeCache[poke]) return;
    async function loadTypes() {
      
      const data = await getPokeData();
      
      const formatted = {
        sprite: data.sprites.front_default,
        types: data.types.map(t => t.type.name),
        id: data.id
      };

      pokeCache[poke] = formatted;

      setSprite(formatted.sprite);
      setTypes(formatted.types);
      setId(formatted.id);
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
            src={sprite}
            width={'150px'}></img>
        </figure>
        <img 
          className="pokeball"
          src={'/pokeball.jpg'}
          alt="pokeball image"
          width={'150px'}
        />
      </div>
    </div>
  );
}
