import React from "react";
import useFetchedPokemons from "../../Hooks/useFetchedPokemons";
import PokemonPopup from "../pokemonPopup/PokemonPopup";
import { Typography, FormControlLabel, Switch, Modal } from "@mui/material";
import {
  StyledBox,
  StyledPopupWrapper,
  StyledAvatar,
  StyledWrapper,
} from "./styled";
import { PokemonProps, PokemonTypeProps } from "../../Interfaces";

const PokemonCart = () => {
  const [pokemons] = useFetchedPokemons();
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState<PokemonProps[]>([]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledWrapper id="styled-wrapper">
      {pokemons.map((pokemon: PokemonProps) => {
        return (
          <React.Fragment key={pokemon.id}>
            <StyledBox
              id={pokemon.id}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                let target = e.target as HTMLButtonElement;

                setModalData([pokemon]);
                setOpen(
                  target.tagName == "INPUT" || target.tagName == "SPAN"
                    ? false
                    : true
                );
              }}
            >
              <Typography variant="h6" component="h1">
                {pokemon.id}
              </Typography>

              <StyledAvatar
                alt={pokemon.name}
                src={pokemon.sprites.front_default}
              />
              <Typography id={pokemon.name} variant="h4" component="h1">
                {pokemon.name}
              </Typography>

              <Typography variant="h6" component="h2">
                {pokemon.types
                  .map((pokemonType: PokemonTypeProps) => pokemonType.type.name)
                  .join(", ")}
              </Typography>

              <FormControlLabel
                value={pokemon.id}
                control={<Switch id={`Captured-${pokemon.id}`} />}
                label="Captured"
              />
            </StyledBox>
            <Modal
              slotProps={{ backdrop: { style: { opacity: 0.1 } } }}
              open={open}
              onClose={handleClose}
            >
              <StyledPopupWrapper>
                <PokemonPopup modalData={modalData} />
              </StyledPopupWrapper>
            </Modal>
          </React.Fragment>
        );
      })}
    </StyledWrapper>
  );
};

export default PokemonCart;
