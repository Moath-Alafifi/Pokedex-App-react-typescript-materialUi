import * as React from "react";
import { StyledSlider, StyledTypography } from "./styled";
import { Avatar, Divider, Typography } from "@mui/material";
import { PokemonProps, PokemonModalDataProps } from "../../Interfaces";
import {
  PokemonStatsProps,
  PokemonTypeProps,
  PokemonMovesProps,
} from "../../Interfaces";

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
              <>
                <StyledTypography id={pokemon.id} variant="subtitle1">
                  {pokemon.stat.name + " :"}

                  <StyledSlider
                    aria-label={pokemon.stat.name}
                    max={100}
                    value={pokemon.base_stat}
                  />
                </StyledTypography>
              </>
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
