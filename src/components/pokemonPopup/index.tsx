import * as React from "react";
import { Avatar, Divider, Slider, Typography, Box } from "@mui/material";
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
  height: 8,
};
const styledTypography = {
  display: "inline-flex",
  width: "100%",
  justifyContent: "space-between",
  " @media (max-width: 640px)": {
    fontSize: 12,
  },
};
const styledMoveList = {
  alignSelf: "none",
  display: "flex",
  alignContent: "space-between",
  flexFlow: "column wrap",
  height: 65,
  fontSize: 12,
  width: "100%",
  margin: "unset",
  padding: "5px 5px 5px 20px",
  " @media (max-width: 640px)": {
    fontSize: 10,
    height: 90,
  },
  " @media (max-width: 480px)": {
    height: 110,
  },
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
            <Box sx={styledMoveList} component="ul">
              {pokemon.moves
                .map((pokemon: PokemonMovesProps) => (
                  <Typography
                    sx={{ fontSize: 12, width: 100 }}
                    variant="subtitle1"
                    component="li"
                  >
                    {pokemon.move.name}
                  </Typography>
                ))
                .slice(0, 15)}
            </Box>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default PokemonPopup;
