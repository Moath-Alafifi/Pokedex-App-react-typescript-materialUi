import React from "react";
import useFetchedPokemons from "../../Hooks/useFetchedPokemons";
import { StyledInputBase, StyledBox, StyledTypography } from "./styled";
import { PokemonProps } from "../../Interfaces";

const SearchPokemons = () => {
  const [pokemons] = useFetchedPokemons();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    pokemons.map((pokemon: PokemonProps) => {
      let cardContainer = document.getElementById(pokemon.id);
      let styledWrapper = document.getElementById('styled-wrapper');
      let pokemonName = document.getElementById(pokemon.name);
      if (cardContainer &&styledWrapper) {
        if (pokemonName?.innerText.includes(e.target.value)) {
          cardContainer.style.display = "flex";
          styledWrapper.style.justifyContent = "space-evenly"
        } else {
          cardContainer.style.display = "none";
        }
      }
    });
  };

  return (
    <>
      <StyledBox>
        <StyledTypography>Search Pokemons</StyledTypography>
        <StyledInputBase
          onChange={handleChange}
          type="search"
          placeholder="Search…"
        />
      </StyledBox>
    </>
  );
};

export default SearchPokemons;