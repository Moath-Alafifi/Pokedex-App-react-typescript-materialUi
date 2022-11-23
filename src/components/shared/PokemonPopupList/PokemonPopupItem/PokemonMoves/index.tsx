import { Typography } from "@mui/material";

const PokemonMoves = ({ pokemonMove }: any) => {
  return (
    <Typography
      sx={{ fontSize: 12, width: 100 }}
      variant="subtitle1"
      component="li"
    >
      {pokemonMove}
    </Typography>
  );
};

export default PokemonMoves;
