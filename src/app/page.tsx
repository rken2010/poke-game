import "nes.css/css/nes.min.css";
import PokeDex from "./components/PokeDex/PokeDex";
import api from "./api";
import Pokemon from "./types/types";

export default async function Home() {
  
  const pokemon = await api.getPokemon()
    const pk1= await api.getPokemon()
    const pk2= await api.getPokemon()
    const pokeList:Pokemon[] = [pk1, pk2, pokemon]
  
  return (
    <main >
      <h1>Quien es ese Pokemon???</h1>
      <PokeDex pkm={pokemon} pokeList={pokeList}/>      
    </main>
  )
}
