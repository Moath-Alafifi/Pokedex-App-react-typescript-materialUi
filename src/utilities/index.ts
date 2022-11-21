import axios from "axios";
import { PokemonProps, PokemonUrlProps } from "../Interfaces";

export const SaveAndAddAndConvertDataToString = (
  localStorageState: any,
  pokemon: any
) => {
  return JSON.stringify([...JSON.parse(localStorageState), pokemon]);
};

export const filterDataAndConvertItToString = (
  localStorageState: any,
  pokemonId: string
) => {
  return JSON.stringify(
    JSON.parse(localStorageState).filter(
      (item: PokemonProps) => item.id !== pokemonId
    )
  );
};

export const findData = (localStorageState: any, id: string) => {
  const localStorageData = JSON.parse(localStorageState);
  const isCaptured = localStorageData.find(
    (pokemon: PokemonProps) => pokemon.id === id
  );
  return !!isCaptured;
};

export const fetchAllPokemons = async (data: any) => {
  return await axios.all(
    data.map(async (promise: PokemonUrlProps) => await axios.get(promise.url))
  );
};
