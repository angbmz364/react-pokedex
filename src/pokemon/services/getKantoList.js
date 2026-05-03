import { fetchPokedex } from "./fetchKantoPokedex";

async function getKantoList() {
  try {
    
    const data = await fetchPokedex();
    return data.results;

  } catch (e) {
    console.log(`Error on getKantoList: ${e}`)
  }
}

export {getKantoList};