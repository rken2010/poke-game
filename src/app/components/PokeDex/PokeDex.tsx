"use client"

import Pokemon from "@/app/types/types";
import PokedexStyle from "./PokedexStyle.module.css"
import { useState, useEffect } from "react";
import api from "@/app/api";


export default function PokeDex({ pkm, pokeList }: { pkm: Pokemon; pokeList: Pokemon[] })   {
  

    const [won, setWon] = useState(false)
    const [pokemon, setPokemon] = useState<Pokemon>(pkm);
    const [pokeOption, setPokeoption] = useState<Pokemon[]>(pokeList);

    useEffect(() => {
      const fetchPokemons = async () => {
        const pk1 = await api.getPokemon();
        const pk2 = await api.getPokemon();
        const pkm = await api.getPokemon();
        setPokemon(pkm)
        setPokeoption([pk1, pk2, pkm]);
      };
        fetchPokemons();
    }, []);
    
    const playGame = (pokemonSelect:string) => {
      let select = pokemonSelect
      let dialog = document.getElementById('dialog-default');
      if (select === pokemon.name) {
        setWon(true)
        if (dialog !== null) {
          (dialog as HTMLDialogElement).showModal();
        }        
      }
      else{ 
        if (dialog !== null) {
          (dialog as HTMLDialogElement).showModal();
        }
      }
    }

 return (
    <div className={PokedexStyle.container}>        
        <div className={`nes-container with-title ${PokedexStyle.containerVisor}`}>
                <h2 className="title">Adivina el Pokemon</h2>
                <img 
                  width={512}
                  height={512}
                  style={{imageRendering:"pixelated", filter:"brightness(0)"}}
                  src={pokemon?.image} alt={pokemon?.name} />
        </div>
        <div className="flex">
          {pokeOption?.map((poke)=>(<button onClick={()=>{playGame(poke?.name)}} type="submit" value={poke?.name} className="nes-btn" key={poke?.name}>{poke?.name}</button>))}
        </div>
        <dialog className="nes-dialog" id="dialog-default">
            <form method="dialog">
            <p className="title">ADIVINA EL POKEMON</p>
            <p>{won!=true?"Perdiste":"Ganaste"} Es {pokemon?.name} </p>
            <img 
                  width={512}
                  height={512}
                  style={{imageRendering:"pixelated"}}
                  src={pokemon?.image} alt={pokemon?.name} />
            <menu className="dialog-menu">
              <button className="nes-btn">Ok</button>
              <button className="nes-btn is-primary" onClick={()=> location.reload()}>Play Again</button>
            </menu>
          </form>
        </dialog>
       
    </div>
  );
}