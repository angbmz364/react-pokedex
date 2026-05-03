const POKEAPI_KANTO_LIST = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

async function fetchPokemon() {
  const response = await fetch(POKEAPI_KANTO_LIST);

  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  
  return await response.json();
}

export {fetchPokemon};