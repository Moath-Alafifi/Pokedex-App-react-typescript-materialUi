import { Typography, Backdrop, CircularProgress } from "@mui/material";
import { styledBackdrop, styledError } from "./styles";
import PokemonCartList from "../../shared/PokemonCartList";

const PokemonCartState = ({ pokemons, error, isLoading }: any) => {
  return (
    <>
      {error ? (
        <Typography variant="h2" align="center" sx={styledError}>
          No Such Pokemon
        </Typography>
      ) : isLoading ? (
        <Backdrop open={true} sx={styledBackdrop}>
          <CircularProgress color="info" />
        </Backdrop>
      ) : (
        <PokemonCartList pokemons={pokemons} />
      )}
    </>
  );
};

export default PokemonCartState;
