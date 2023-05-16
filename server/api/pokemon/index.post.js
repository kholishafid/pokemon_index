export default defineEventHandler(async (event) => {
  const {endpoint} = await readBody(event);
  const {count, next, previous, results} = await fetch(endpoint)
      .then((res) => res.json())
      .then((res) => res);

  for (let index = 0; index < results.length; index++) {
    const {id, types} = await fetch(results[index].url)
        .then((res) => res.json())
        .then((res) => res);

    results[index].id = id;
    results[index].types = types;
  }

  return {count, next, previous, results};
});
