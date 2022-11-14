import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonUrlProps } from "../Interfaces";

function useFetchedPokemons() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const rangeInt = Math.floor(Math.random() * 150);
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${rangeInt}`)
          .then((res) => {
            axios
              .all(
                res.data.results.map(
                  async (promise: PokemonUrlProps) =>
                    await axios.get(promise.url)
                )
              )
              .then((val: any) => {
                setData(val);
              });
          });
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const pokemons = data.map((val: any) => val.data) as [];

  return [pokemons];
}

export default useFetchedPokemons;
