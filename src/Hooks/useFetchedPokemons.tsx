import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { PokemonUrlProps } from "../Interfaces";

function useFetchedPokemons(searchParam: string | null) {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const rangeInt = Math.floor(Math.random() * 150);
  let url = "https://pokeapi.co/api/v2/pokemon/";
  url += searchParam ? searchParam : rangeInt;

  console.log(searchParam);
  const getData = useCallback(async () => {
    try {
      await axios.get(url).then(async (res) => {
        if (!searchParam) {
          await axios
            .all(
              res.data.results.map(
                async (promise: PokemonUrlProps) => await axios.get(promise.url)
              )
            )
            .then((val: any) => {
              setIsLoaded(true);
              setData(val);
            });
        } else {
          setIsLoaded(true);
          setData([res]);
        }
      });
    } catch (err) {
      setIsLoaded(true);
      setError(err);
    }
  }, [searchParam]);

  useEffect(() => {
    getData();
  }, [getData]);

  const pokemons = data.map((val: any) => val.data) as [];

  return [pokemons, error, isLoaded];
}

export default useFetchedPokemons;
