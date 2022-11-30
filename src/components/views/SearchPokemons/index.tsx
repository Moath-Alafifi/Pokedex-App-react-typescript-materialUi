import { ChangeEvent } from "react";
import { Typography, Box, InputBase } from "@mui/material";
import { styledBox, styledTypography, styledInputBase } from "./styles";
import { debounce } from "utils";

const SearchPokemons = ({ setSearchValue }: any) => {
  const updateDebounceText = debounce((text: string) => {
    setSearchValue(text);
  });
  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    updateDebounceText(e.target.value.toLocaleLowerCase());
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
