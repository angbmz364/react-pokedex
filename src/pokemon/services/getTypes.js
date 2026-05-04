async function getPokeData(url) {
  const res = await  fetch(url);

  if (!res.ok) {
    return ["Unknown", "Unknown"];
  }

  const data = await res.json();
  return data;
}

export {getPokeData};