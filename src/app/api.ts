import Pokemon from "./types/types"

let randomPkm = ()=>{
    const POKEMON_LIMIT = 1200
    const random = Math.floor( Math.random() * POKEMON_LIMIT)
    let apiAdress = `https://pokeapi.co/api/v2/pokemon/${random}`
    
    return apiAdress
}

const api ={
    getPokemon: async() =>  {
        const POKEMON_LIMIT:number = 1200
        const random: Number = Math.floor(Math.random() * POKEMON_LIMIT)
        const apiAdress:string = `https://pokeapi.co/api/v2/pokemon/${random}`
        const pkm = fetch(apiAdress).then(res => res.json() as Promise<Pokemon>)
        return pkm
    }

} 

export default api

function getPokemon() {
    throw new Error("Function not implemented.")
}
