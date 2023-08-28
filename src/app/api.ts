import Pokemon from "./types/types"

const api ={
    getPokemon: async() =>  {
        const MAX_POKEMON = 1200;
        const randomNumber = Math.floor(Math.random() * MAX_POKEMON);
        const url = API_URL + randomNumber;
      return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const pkm = {
        name: data.name,
        image: data.sprites.front_default,
      };
      return pkm;
    });
    }

} 

export default api

