const POKEAPI_POKEDEX = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

async function fetchPokedex() {
  const response = await fetch(POKEAPI_POKEDEX);

  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  
  return await response.json();
}

export {fetchPokedex};