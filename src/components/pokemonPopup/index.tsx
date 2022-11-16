import * as React from "react";
import { Avatar, Divider, Slider, Typography } from "@mui/material";
import {
  PokemonStatsProps,
  PokemonTypeProps,
  PokemonMovesProps,
  PokemonProps,
  PokemonModalDataProps,
} from "../../Interfaces";
import { v4 as statsId } from "uuid";

const styledSlider = {
  " & .MuiSlider-thumb": {
    display: "none",
  },
  width: "70%",
  height: 7,
};
const styledTypography = {
  display: "inline-flex",
  width: "100%",
  justifyContent: "space-between",
};

const PokemonPopup = ({ modalData }: PokemonModalDataProps) => {
  return (
    <>
      {modalData.map((pokemon: PokemonProps) => {
        return (
          <React.Fragment key={pokemon.id}>
            <Avatar alt={pokemon.name} src={pokemon.sprites.front_default} />
            <Typography variant="h6" component="h1">
              {pokemon.name}
            </Typography>
            <Divider sx={{ width: "100%" }} />
            <Typography variant="h6" component="h1">
              types
            </Typography>
            <Typography variant="h6" component="h2">
              {pokemon.types
                .map((pokemonType: PokemonTypeProps) => pokemonType.type.name)
                .join(", ")}
            </Typography>
            <Divider sx={{ width: "100%" }} />
            <Typography variant="h6" component="h1">
              Stats
            </Typography>
            {pokemon.stats.map((pokemon: PokemonStatsProps) => (
              <React.Fragment key={statsId()}>
                <Typography
                  sx={styledTypography}
                  id={pokemon.id}
                  variant="subtitle1"
                >
                  {pokemon.stat.name + " :"}
                  <Slider
                    sx={styledSlider}
                    aria-label={pokemon.stat.name}
                    max={100}
                    value={pokemon.base_stat}
                  />
                </Typography>
              </React.Fragment>
            ))}
            <Divider sx={{ width: "100%" }} />
            <Typography variant="h6" component="h1">
              Moves
            </Typography>
            <Typography variant="subtitle1" component="span">
              {pokemon.moves
                .map((pokemon: PokemonMovesProps) => pokemon.move.name)
                .slice(0, 15)
                .join("  ")}
            </Typography>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default PokemonPopup;
