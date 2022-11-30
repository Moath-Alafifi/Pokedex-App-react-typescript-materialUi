import axios from "axios";
import { PokemonProps, PokemonUrlProps } from "Interfaces";

export const setPokemon = (
  localStorageState: any,
  pokemon: any
) => {
  return JSON.stringify([...JSON.parse(localStorageState), pokemon]);
};

export const removePokemon = (
  localStorageState: any,
  pokemonId: string
) => {
  return JSON.stringify(
    JSON.parse(localStorageState).filter(
      (item: PokemonProps) => item.id !== pokemonId
    )
  );
};

export const isPokemonSaved = (localStorageState: any, id: string) => {
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

export const debounce = (cb: any, delay = 1000) => {
  let timeout: any;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};