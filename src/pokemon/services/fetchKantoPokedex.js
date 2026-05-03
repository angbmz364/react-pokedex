const POKEAPI_POKEDEX = 'https://pokeapi.co/api/v2/pokedex/kanto/';

async function fetchPokedex() {
  const response = await fetch(POKEAPI_POKEDEX);

  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  
  return await response.json();
}

export {fetchPokedex};