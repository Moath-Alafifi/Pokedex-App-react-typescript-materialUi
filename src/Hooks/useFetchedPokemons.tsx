import axios from "axios";
import { useEffect, useState } from "react";

type ResultType = {
  url: string;
};

function useFetchedPokemons() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const rangeInt = Math.floor(Math.random() * 150);
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=0`)
          .then((res) => {
            axios
              .all(
                res.data.results.map(
                  async (promise: ResultType) => await axios.get(promise.url)
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

  const pokemons = data.map((val: any) => val.data);

  return [pokemons];
}

export default useFetchedPokemons;
