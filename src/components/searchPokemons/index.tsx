import { useRef, useState } from "react";
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
  const searchRef = useRef<any>(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [pokemons] = useFetchedPokemons(searchValue);

  return (
    <>
      <Box sx={styledBox}>
        <Typography sx={styledTypography}>Search Pokemons</Typography>
        <InputBase
          sx={styledInputBase}
          inputRef={searchRef}
          onChange={() => setSearchValue(searchRef.current?.value)}
          type="search"
          placeholder="Search…"
        />
      </Box>

      <PokemonCart pokemons={pokemons} />
    </>
  );
};

export default SearchPokemons;
