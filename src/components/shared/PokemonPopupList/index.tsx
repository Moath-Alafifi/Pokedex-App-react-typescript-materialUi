import { PokemonProps, PokemonModalDataProps } from "Interfaces";
import PokemonPopupItem from "./PokemonPopupItem";

const PokemonPopupList = ({ modalData }: PokemonModalDataProps) => {
  return (
    <>
      {modalData.map((pokemon: PokemonProps) => (
        <PokemonPopupItem
          key={pokemon.id}
          pokemonId={pokemon.id}
          pokemonName={pokemon.name}
          pokemonImg={pokemon.sprites.front_default}
          pokemon={pokemon}
        />
      ))}
    </>
  );
};

export default PokemonPopupList;
