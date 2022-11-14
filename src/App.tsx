import { Backdrop } from "@mui/material";
import Footer from "./components/footer/Footer";
import PokemonCart from "./components/pokemonCart/PokemonCart";
import SavedPokemons from "./components/savedPokemons/SavedPokemons";
import SearchPokemons from "./components/searchPokemons/SearchPokemons";
import useFetchedPokemons from "./Hooks/useFetchedPokemons";

function App() {
  const [pokemons] = useFetchedPokemons();
  if (!pokemons.length) {
    return <Backdrop open={true} />
  }
  return (
    <>
      <SavedPokemons pokemons={pokemons} />
      <SearchPokemons pokemons={pokemons} />
      <PokemonCart pokemons={pokemons} />
      <Footer />
    </>
  );
}

export default App;
