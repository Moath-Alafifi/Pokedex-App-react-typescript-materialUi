import React, { ChangeEvent, useState } from "react";
import PokemonPopup from "../pokemonPopup";
import {
  Typography,
  FormControlLabel,
  Switch,
  Modal,
  Box,
  Avatar,
} from "@mui/material";

import { PokemonProps, PokemonTypeProps } from "../../Interfaces";
import { useLocalStorageState } from "../../Hooks/useLocalStorageState";
import {
  filterDataAndConvertItToString,
  findData,
  SaveAndAddAndConvertDataToString,
} from "../../utilities";

const styledBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: 290,
  height: 350,
  backgroundColor: "aliceblue",
  marginBottom: 4,
  borderRadius: 4,
};
const styledWrapper = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#5DB9FF",
  padding: "20px !important",
  minHeight: 550,
  " @media (max-width: 640px)": {
    justifyContent: "center",
  },
  " @media (max-width: 940px)": {
    justifyContent: "space-around",
  },
};
const styledAvatar = {
  width: 120,
  height: 120,
};
const styledPopupWrapper = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  boxShadow: "1px 1px 3px #fff",
  backgroundColor: "aliceblue",
  padding: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  " @media (max-width: 640px)": {
    width: "75vw",
  },
};

const PokemonCart = ({ pokemons }: any) => {
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
          SaveAndAddAndConvertDataToString(localStorageState, pokemon)
        )
      : setLocalStorageState(
          filterDataAndConvertItToString(localStorageState, pokemonId)
        );
  };

  const handleIsCaptured = (id: string) => {
    return findData(localStorageState, id);
  };

  return (
    <Box sx={styledWrapper}>
      {pokemons.map((pokemon: PokemonProps) => {
        return (
          <React.Fragment key={pokemon.id}>
            <Box
              sx={styledBox}
              id={pokemon.id}
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                handleOpen(e, pokemon)
              }
            >
              <Typography variant="h6" component="h1">
                {pokemon.id}
              </Typography>

              <Avatar
                style={styledAvatar}
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
                control={
                  <Switch
                    checked={handleIsCaptured(pokemon.id)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChecked(e, pokemon, pokemon.id)
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
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default PokemonCart;
