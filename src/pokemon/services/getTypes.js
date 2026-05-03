async function getTypes(url) {
  const res = await  fetch(url);

  if (!res.ok) {
    return ["Unknown", "Unknown"];
  }

  const data = await res.json();
  return data.types.map(t => t.type.name);
}

export {getTypes};