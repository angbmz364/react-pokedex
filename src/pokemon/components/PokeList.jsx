import { useEffect } from "react"
import { getPokeList } from "../services/formatPokeJson"
import { useState } from "react";
import PokeCard from "./PokeCard";
import { getPokeData } from "../services/getTypes";

export default function PokeList( {search} ) {

  const [ pokeList, setPokeList ] = useState([])

  useEffect( () => {
    async function loadData() {
      const data = await getPokeList();
      setPokeList(data)
    }

    loadData();
  }, [])

  const filteredList = pokeList.filter(
    p => p.name.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <ul style={ {marginBottom: '30px'} }>
      {
        filteredList.map( (p, i) => (
          <PokeCard 
            poke={p.name} 
            id={i+1} 
            key={p.name} 
            getPokeData={() => getPokeData(p.url)}
          />
        ))
      }
    </ul>
  )
}