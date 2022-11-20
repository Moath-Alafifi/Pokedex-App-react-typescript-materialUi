import { useState } from "react";
import { Typography, Box, InputBase } from "@mui/material";
import useFetchedPokemons from "../../Hooks/useFetchedPokemons";
import PokemonCart from "../pokemonCart";

export const styledInputBase = {
  color: "#fff",
  backgroundColor: "#5DB9FF",
  borderRadius: 10,
  paddingLeft: 2,
  "& .MuiInputBase-input": {
    width: "30ch",
    "&:focus": {
      width: "40ch",
    },
  },
};
const styledBox = {
  backgroundColor: "#2e7ebb",
  height: 80,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const styledTypography = {
  color: "#fff",
  fontSize: 30,
  fontWeight: "bold",
  paddingRight: 5,
};
const SearchPokemons = () => {
  const [searchValue, setSearchValue] = useState<string | null>("");
  const [pokemons] = useFetchedPokemons(searchValue);

  return (
    <>
      <Box sx={styledBox}>
        <Typography sx={styledTypography}>Search Pokemons</Typography>
        <InputBase
          sx={styledInputBase}
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          placeholder="Search…"
        />
      </Box>
      <PokemonCart pokemons={pokemons} />
    </>
  );
};

export default SearchPokemons;
