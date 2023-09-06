# PROYECTO POKEGAME
Este Proyecto es un juego de adivinar el Pokemon. Consiste en mostrar una imagen de un Pokemon y adivinar de las tres opciones a que Pokemon corresponde.
<insertar captura de pantalla>

## Armado

### Creacion del Proyecto:
Creamos nuestro proyecto en Next JS abriendo la terminal y usando el comando `npx create-next-app@latest`
 En este caso lo cree con las opciones preestablecidas ( Typescript, Tailwind,etc)
 
### API:
Cree un archivo `api.ts`. En el incluyo un objeto api con las funciones para obtener los datos. 

     const api = {
      getPokemon: async() => {
        const MAX_POKEMON = 1015;
        const API_URL = "https://pokeapi.co/api/v2/pokemon/";
        const randomNumber=Math.floor(Math.random()*MAX_POKEMON);
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
      shuffle:(arr: any[]) =>{
        let i:number
        let j:number
        let temp:number
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
**getPokemon** contiene tres constantes:
La primera marca el máximo en el valor del ID de Pokemones

La segunda se utiliza para indicar la dirección de donde realizaremos el *fetch* de los datos, en este caso será la **PokeAPI** 

La tercera será una mini función donde obtendremos un número al azar que será el número ID para traer a nuestro Pokemon. Con Math.floor nos aseguramos que sea un número entero y math.random multiplicado por el número maximo de Pokemons para generar el número aleatorio.

> Utilizamos una constante MAX_POKEMON para limitar el número al azar que nos traera math.random. Si no lo hacemos el fetch nos genera problemas de no encontrar un Pokemon si sobrepasa la cantidad existente.

Por ultimo tenemos una constante con la direccion donde haremos el fetch con la combinacion de la URL de PokeAPI y el número al azar.

#### Fetch
Hacemos el fetch con la URL obtenida, con un `then` convertimos el JSON de respuesta
otro `then` para crear nuestro objeto pkm que sera la que usaremos en nuestro componente y lo retornamos.

#### shuffle
Para mezclar las opciones de Pokemones busque un algoritmo de mezcla de Arrays ( algoritmo Fisher-Yates ), 

    shuffle:(arr: any[]) =>{
    let i:number
    let j:number
    let temp:number
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
  
## Componente PokeDex
Para mostrar los Pokemons cree un componente con el nombre PokeDex
Para empezar como utilizaremos Hooks de Reacts deberemos indicar que este componente es del tipo *Client Component* de Next. Esto es porque necesitaremos interacción en nuestra APP ( cambiar el Pokemon, elegir una opcion, indicar si ganamos o perdimos). Para esto en el inicio debemos indicar `"use client"` en el inicio del código como si fuera un titulo. 

> Mas información de Client components en https://nextjs.org/docs/app/building-your-application/rendering/client-components

**PokeDex** tendra tres useStates

    const [won, setWon] = useState(false)
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [pokeOption, setPokeoption] = useState<Pokemon[]>([]);

El primero para obtener el resultado del juego (si ganamos o perdemos)
El segundo para nuestro Pokemon para jugar
y el tercero nuestro Array de opciones para elegir en el juego.

Contara con un useEffect para traer los datos al renderizar

    useEffect(() => {
      const fetchPokemons = async () => {
        const pk1 = await api.getPokemon();
        const pk2 = await api.getPokemon();
        const pkm = await api.getPokemon();
        const pokemons = [pk1, pk2, pkm] as any[];

        api.shuffle(pokemons);
        setPokemon(pkm);
        setPokeoption(pokemons);
      };
        fetchPokemons();
    }, []);
En el traemos nuestras promesas del archivo API para obtener tres Pokemones y los agregamos a un Array que será lo que renderizamos como opciones a elegir.
con `api.shuffle` mezclamos el Array con las opciones.
Despues guardamos los estados. La constante pkm la guardamos en setPokemon que será nuestro Pokemon en juego y del cual renderizaremos la imagen que hay que adivinar. El Array lo guardamos en el estado setPokeoption que sera lo que rendericemos como opciones para elegir.
Finalmente ejecutamos `fetchPokemon()` que realizara todo este proceso 

> Antes de usar el useEffect, trate de implementar este proceso utilizando solo las props de los componentes, lo que no funciono ya que no volvia a hacer la promesa al renderizar nuevamente (localmente si funcionaba no me peguen). Y si useEffect esta para eso 
(◔_◔)....


## Fuentes

 - Para la idea y realizacion del proyecto:
 Use el streaming de Goncy (https://www.twitch.tv/goncy.pozzo) en donde hacen tres proyectos. Lo pueden ver en Youtube:
https://youtube.com/watch?v=YMfUaHFKI0I&si=YX1yKnNF7oWmX4VI
 - API
 Use la PokeAPI para obtener los datos de los Pokemons, de alli obtuve el nombre y la imagen de los Pokemones
 https://pokeapi.co/
 - Librerias:
Use NES.css NES-style CSS Framework para el diseño
https://nostalgic-css.github.io/NES.css/#
NextJS para el armado del Proyecto
https://nextjs.org/
 - Algoritmo Fisher-Yates
https://www.jstips.co/es_es/javascript/shuffle-an-array/
