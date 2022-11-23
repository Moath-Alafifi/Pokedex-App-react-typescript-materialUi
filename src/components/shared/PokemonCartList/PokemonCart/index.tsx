import React, { ChangeEvent, useState } from "react";
import PokemonPopup from "../../PokemonPopupList";
import {
  Typography,
  FormControlLabel,
  Switch,
  Modal,
  Box,
  Avatar,
} from "@mui/material";

import { PokemonProps, PokemonTypeProps } from "Interfaces";
import { useLocalStorageState } from "Hooks/useLocalStorageState";
import {
  setPokemon,
  isPokemonSaved,
  removePokemon,
} from "utils";
import PokemonType from "./PokemonType";
import { styledAvatar, styledBox, styledPopupWrapper } from "./styles";
import { v4 as typeId } from "uuid";
const PokemonCart = ({ pokemonId, pokemonName, pokemonImg, pokemon }: any) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<PokemonProps[]>([]);
  const { localStorageState, setLocalStorageState } =
    useLocalStorageState("savedPokemons");

  const handleOpen = (e: React.MouseEvent<HTMLDivElement>, pokemon: any) => {
    let target = e.target as HTMLButtonElement;
    setModalData([pokemon]);
    setOpen(target.tagName === "INPUT" ? false : true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChecked = (
    e: ChangeEvent<HTMLInputElement>,
    pokemon: any,
    pokemonId: string
  ) => {
    e.target.checked
      ? setLocalStorageState(
          setPokemon(localStorageState, pokemon)
        )
      : setLocalStorageState(
          removePokemon(localStorageState, pokemonId)
        );
  };

  const handleIsCaptured = (id: string) => {
    return isPokemonSaved(localStorageState, id);
  };
  return (
    <>
      <Box
        sx={styledBox}
        id={pokemonId}
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          handleOpen(e, pokemon)
        }
      >
        <Typography variant="h6" component="h1">
          {pokemonId}
        </Typography>

        <Avatar style={styledAvatar} alt={pokemonName} src={pokemonImg} />
        <Typography id={pokemonName} variant="h4" component="h1">
          {pokemonName}
        </Typography>
        <Box>
          {pokemon.types.map((pokemonType: PokemonTypeProps) => (
            <PokemonType key={typeId()} pokemonType={pokemonType.type.name} />
          ))}
        </Box>

        <FormControlLabel
          control={
            <Switch
              checked={handleIsCaptured(pokemonId)}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChecked(e, pokemon, pokemonId)
              }
            />
          }
          label="Captured"
        />
      </Box>
      <Modal
        slotProps={{ backdrop: { style: { opacity: 0.1 } } }}
        open={open}
        onClose={handleClose}
      >
        <Box sx={styledPopupWrapper}>
          <PokemonPopup modalData={modalData} />
        </Box>
      </Modal>
    </>
  );
};

export default PokemonCart;
