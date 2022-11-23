import { Typography } from "@mui/material";

const PokemonType = ({ pokemonType }: any) => {
  return (
    <Typography variant="h6" component="span">
      {pokemonType + ' '} 
    </Typography>
  );
};

export default PokemonType;
