import { Box } from "@mui/material";
import { PokemonProps } from "Interfaces";
import PokemonCart from "./PokemonCart";
import { styledWrapper } from "./styles";

const PokemonCartList = ({ pokemons }: any) => {
  return (
    <Box sx={styledWrapper}>
      {pokemons.map((pokemon: PokemonProps) => (
        <PokemonCart
          key={pokemon.id}
          pokemonId={pokemon.id}
          pokemonName={pokemon.name}
          pokemonImg={pokemon.sprites.front_default}
          pokemon={pokemon}
        />
      ))}
    </Box>
  );
};

export default PokemonCartList;
