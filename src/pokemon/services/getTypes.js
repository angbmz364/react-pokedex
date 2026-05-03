async function getTypes(url) {
  const res = await  fetch(url);

  if (!res.ok) {
    return ["Unknown", "Unknown"];
  }

  const data = res.json();
  const types = [data.types[0].type.name, data.types[1].type.name];
  return types;
}

export {getTypes};