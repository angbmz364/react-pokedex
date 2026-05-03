import { useState } from "react";
import "../../styles/PokeCard.css";
import { useEffect } from "react";

export default function PokeCard({ poke, id, getTypes }) {
  const [types, setTypes] = useState([]);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.split("").slice(1).join("")
  }

  useEffect(() => {
    async function loadTypes() {
      const data = await getTypes();
      setTypes(data);
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
      <main>
        <div className="typesContainer">
          {types.map((i) => (
            <span key={i}>{capitalize(i)}</span>
          ))}
        </div>
        <figure>
          <img alt={`${poke} image`} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" width={'100px'}></img>
        </figure>
      </main>
    </div>
  );
}
