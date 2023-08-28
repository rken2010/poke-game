"use client"

import Pokemon from "@/app/types/types";
import PokedexStyle from "./PokedexStyle.module.css"
import { useState, useEffect } from "react";


interface PokeDexProps {
  pkm: Pokemon;
  pokeList: Pokemon[];
}

const PokeDex: React.FC<PokeDexProps> = ({ pkm, pokeList }) => {

    const [won, setWon] = useState(false)
    const [pokemon, setPokemon] = useState(pkm);
   
    
    function playGame(pokemonSelect:string) {
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
                  src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="flex">
          {pokeList.map((poke)=>(<button onClick={()=>{playGame(poke.name)}} type="submit" value={poke.name} className="nes-btn" key={poke.name}>{poke.name}</button>))}
        </div>
        <dialog className="nes-dialog" id="dialog-default">
            <form method="dialog">
            <p className="title">ADIVINA EL POKEMON</p>
            <p>{won!=true?"Perdiste":"Ganaste"} Es {pokemon.name} </p>
            <img 
                  width={512}
                  height={512}
                  style={{imageRendering:"pixelated"}}
                  src={pokemon.image} alt={pokemon.name} />
            <menu className="dialog-menu">
              <button className="nes-btn">Ok</button>
              <button className="nes-btn is-primary" onClick={()=> location.reload()}>Play Again</button>
            </menu>
          </form>
        </dialog>
       
    </div>
  );
}

export default PokeDex


