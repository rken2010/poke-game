const api = {
  getPokemon: async() => {
    const MAX_POKEMON = 1015;
    const API_URL = "https://pokeapi.co/api/v2/pokemon/";
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
      })
      .catch((err) => {
                  throw err;
        }
      );
  },
  shuffle:(arr) =>{
	  let i
    let j
    let temp
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
  }
};

export default api;