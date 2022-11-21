import { ChangeEvent, useState } from "react";
import {
  Typography,
  Box,
  InputBase,
  Backdrop,
  CircularProgress,
} from "@mui/material";
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
  " @media (max-width: 640px)": {
    "& .MuiInputBase-input": {
      width: "18ch",
      "&:focus": {
        width: "20ch",
      },
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
  " @media (max-width: 640px)": {
    fontSize: 20,
    paddingRight: 1,
  },
};

const styledError = {
  padding: "34vh",
  color: "#2e7ebb",
};
const styledBackdrop = { top: 80, position: "initial", height: "90vh" };

const SearchPokemons = () => {
  const [searchValue, setSearchValue] = useState<string | null>("");
  const { pokemons, error, isLoading } = useFetchedPokemons(searchValue);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLocaleLowerCase());
  };

  return (
    <>
      <Box sx={styledBox}>
        <Typography sx={styledTypography}>Search Pokemons</Typography>
        <InputBase
          sx={styledInputBase}
          onChange={handleSearchValue}
          type="search"
          placeholder="Search…"
        />
      </Box>
      {error ? (
        <Typography variant="h2" align="center" sx={styledError}>
          No Such Pokemon
        </Typography>
      ) : isLoading ? (
        <Backdrop open={true} sx={styledBackdrop}>
          <CircularProgress color="info" />
        </Backdrop>
      ) : (
        <PokemonCart pokemons={pokemons} />
      )}
    </>
  );
};

export default SearchPokemons;
