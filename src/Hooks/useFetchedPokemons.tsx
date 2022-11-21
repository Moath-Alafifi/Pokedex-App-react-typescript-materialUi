import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { fetchAllPokemons } from "../utilities";

function useFetchedPokemons(searchParam: string | null) {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const rangeInt = Math.floor(Math.random() * 150);
  let url = "https://pokeapi.co/api/v2/pokemon/";
  url += searchParam ? searchParam : `?limit=8&offset=${rangeInt}`;

  const getData = useCallback(async () => {
    try {
      await axios.get(url).then(async (res) => {
        if (!searchParam) {
          fetchAllPokemons(res.data.results).then((val: any) => {
            setError(false);
            setIsLoading(false);
            setData(val);
          });
        } else {
          setError(false);
          setIsLoading(false);
          setData([res]);
        }
      });
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  }, [searchParam]);

  useEffect(() => {
    getData();
  }, [getData]);

  const pokemons = data.map((val: any) => val.data) as [];

  return { pokemons, error, isLoading };
}

export default useFetchedPokemons;
