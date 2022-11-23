import Footer from "components/views/Footer";
import { useState } from "react";
import useFetchedPokemons from "Hooks/useFetchedPokemons";
import SearchPokemons from "components/views/SearchPokemons";
import PokemonCartState from "components/views/PokemonCartState";

const App = () => {
  const [searchValue, setSearchValue] = useState<string | null>("");
  const { pokemons, error, isLoading } = useFetchedPokemons(searchValue);

  return (
    <>
      <SearchPokemons setSearchValue={setSearchValue} />
      <PokemonCartState
        pokemons={pokemons}
        error={error}
        isLoading={isLoading}
      />
      <Footer />
    </>
  );
};

export default App;
