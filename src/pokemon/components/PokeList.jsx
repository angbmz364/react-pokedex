import { useEffect } from "react"
import { getKantoList } from "../services/getKantoList"
import { useState } from "react";
import PokeCard from "./PokeCard";

export default function PokeList() {

  const [ pokeList, setPokeList ] = useState([])

  /* useEffect( () => {
    async function loadData() {
      const data = await getKantoList();
      setPokeList(data)
    }

    loadData();
  }, [])
  */
  return (
    <ul>
      List
    </ul>
  )
}