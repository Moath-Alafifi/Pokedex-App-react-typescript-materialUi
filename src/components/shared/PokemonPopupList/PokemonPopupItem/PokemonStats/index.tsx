import { Slider, Typography } from "@mui/material";
import { styledSlider, styledTypography } from "./styles";

const PokemonStats = ({ pokemonId, pokemonStatName, pokemonBaseStat }: any) => {
  return (
    <>
      <Typography sx={styledTypography} id={pokemonId} variant="subtitle1">
        {pokemonStatName + " :"}
        <Slider
          sx={styledSlider}
          aria-label={pokemonStatName}
          max={100}
          value={pokemonBaseStat}
        />
      </Typography>
    </>
  );
};

export default PokemonStats;
