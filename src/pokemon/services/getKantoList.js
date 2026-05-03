import { fetchPokedex } from "./fetchKantoPokedex";

async function getKantoList() {
  try {
    const data = await fetchPokedex();
    return data.pokemon_entries;
  } catch (e) {
    throw new Error(e)
  }
}