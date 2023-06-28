/**
 * Nge fetch 1 pagination.
 * @param {string} url
 * @return {object} object `{count, previous , results}`
 */
async function fetchPage(url = 'https://pokeapi.co/api/v2/pokemon?limit=6&offset=0') {
  return await fetch(`/api/pokemon`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      endpoint: url,
    }),
  }).then((res) => res.json());
}

/**
 * Fetch 1 data pokemon.
 * @param {string} id
 * @return {object} object
 */
async function fetchPokemonById(id) {
  return await fetch(`/api/pokemon/${id}`).then((res) => res.json());
}

export { fetchPage, fetchPokemonById };
