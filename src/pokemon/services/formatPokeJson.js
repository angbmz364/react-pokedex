import { fetchPokemon } from "./fetchPokemon";

async function getPokeList() {
  try {
    const data = await fetchPokemon();
    return data.results;
  } catch (e) {
    console.log(`Error on getKantoList: ${e}`)
  }
}

export {getPokeList};