import { useEffect } from "react"
import { getPokeList } from "../services/formatPokeJson"
import { useState } from "react";
import PokeCard from "./PokeCard";
import { getPokeData } from "../services/getTypes";

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
    <ul style={ {marginBottom: '30px'} }>
      {
        pokeList.map( (p, i) => (
          <PokeCard poke={p.name} id={i+1} key={i+1} getPokeData={() => getPokeData(p.url)}/>
        ))
      }
    </ul>
  )
}