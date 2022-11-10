import { useEffect } from "react";
import useFetchedPokemons from "../../Hooks/useFetchedPokemons";
import { PokemonProps } from "../../Interfaces";

function SavedPokemons() {
  const [pokemons] = useFetchedPokemons();

  useEffect(() => {
    pokemons.map((pokemon: PokemonProps) => {
      let checkbox = document.getElementById(
        `Captured-${pokemon.id}`
      ) as HTMLInputElement;

      checkbox.addEventListener("click", (e) => {
        let target = e.target as HTMLInputElement;
        if (target.value == pokemon.id) {
          if (checkbox) {
            if (checkbox.checked) {
              localStorage.setItem(pokemon.id, JSON.stringify(pokemon));
            } else {
              localStorage.removeItem(pokemon.id);
            }
          }
        }
      });

      let retrievedObject = localStorage.getItem(pokemon.id);
      if (retrievedObject) {
        let savedData = JSON.parse(retrievedObject);
        if (savedData) {
          checkbox.defaultChecked = true;
        }
      }
    });
  }, [pokemons]);

  return null;
}

export default SavedPokemons;
