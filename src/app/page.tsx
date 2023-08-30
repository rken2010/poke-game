import "nes.css/css/nes.min.css";
import PokeDex from "./components/PokeDex/PokeDex";
import api from "./api";
import Pokemon from "./types/types";

export default async function Home() {
  

  
  return (
    <main >
      <h1>Quien es ese Pokemon???</h1>
      <PokeDex />      
    </main>
  )
}
