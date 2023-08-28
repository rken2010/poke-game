const api = {
  getPokemon: async() => {
    const MAX_POKEMON = 1015;
    const API_URL = "https://pokeapi.co/api/v2/pokemon/";
    const randomNumber = Math.floor(Math.random() * MAX_POKEMON);
    console.log(randomNumber);
    const url = API_URL + randomNumber;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const pkm = {
          name: data.name,
          image: data.sprites.front_default,
        };
        return pkm;
      })
      .catch((err) => {
                  throw err;
        }
      );
  },
};

export default api;