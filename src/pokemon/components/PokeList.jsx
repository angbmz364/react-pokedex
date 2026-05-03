import { useEffect } from "react"
import { getPokeList } from "../services/formatPokeJson"
import { useState } from "react";
import PokeCard from "./PokeCard";

export default function PokeList() {

  const [ pokeList, setPokeList ] = useState([])

  useEffect( () => {
    async function loadData() {
      const data = await getPokeList();
      setPokeList(data)
    }

    loadData();
  }, [])
  
  return (
    <ul>
      {
        pokeList.map( (p, i) => (
          <PokeCard poke={p.name} id={i+1} />
        ))
      }
    </ul>
  )
}