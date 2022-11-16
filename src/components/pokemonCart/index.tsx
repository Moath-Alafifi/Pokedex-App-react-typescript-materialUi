import React, { useEffect, useRef, useState } from "react";
import PokemonPopup from "../pokemonPopup";
import {
  Typography,
  FormControlLabel,
  Switch,
  Modal,
  Box,
  Avatar,
  Backdrop,
} from "@mui/material";

import { PokemonProps, PokemonTypeProps } from "../../Interfaces";
import { useLocalStorageState } from "../../Hooks/useLocalStorageState";
import useFetchedPokemons from "../../Hooks/useFetchedPokemons";

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
};

const PokemonCart = ({ pokemons }: any) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<PokemonProps[]>([]);

  const switchRef = useRef<any>();
  const [error, isLoaded] = useFetchedPokemons(null);
  const [localStorageState, setLocalStorageState] = useLocalStorageState('savedPokemons' );
  // if (error) {
  //   return <h1>no such pokemon</h1>;
  // } else if (!isLoaded) {
  //   return <Backdrop open={true} />;
  // }
  useEffect(() => {
    pokemons.map((pokemon: any) => {
      let data = localStorage.getItem(pokemon.id);
      if (data) {
        let savedData = JSON.parse(data);
        if (savedData) switchRef.current.checked = true;
      }
    });
  }, [pokemons]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={styledWrapper}>
      {pokemons.map((pokemon: PokemonProps) => {
        return (
          <React.Fragment key={pokemon.id}>
            <Box
              sx={styledBox}
              id={pokemon.id}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                let target = e.target as HTMLButtonElement;
                setModalData([pokemon]);
                setOpen(target.tagName === "INPUT" ? false : true);
              }}
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
                value={pokemon.id}
                control={
                  <Switch
                    inputRef={switchRef}
                    onChange={(e) =>
                      e.target.checked
                        ? setLocalStorageState('')
                        : localStorage.removeItem(pokemon.id)
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
