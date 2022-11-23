import { ChangeEvent } from "react";
import { Typography, Box, InputBase } from "@mui/material";
import { styledBox, styledTypography, styledInputBase } from "./styles";

const SearchPokemons = ({ setSearchValue }: any) => {
  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLocaleLowerCase());
  };

  return (
    <Box sx={styledBox}>
      <Typography sx={styledTypography}>Search Pokemons</Typography>
      <InputBase
        sx={styledInputBase}
        onChange={handleSearchValue}
        type="search"
        placeholder="Search…"
      />
    </Box>
  );
};
export default SearchPokemons;
