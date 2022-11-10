import Footer from "./components/footer/Footer";
import PokemonCart from "./components/pokemonCart/PokemonCart";
import SavedPokemons from "./components/savedPokemons/SavedPokemons";
import SearchPokemons from "./components/searchPokemons/SearchPokemons";

function App() {
  return (
    <>
      <SavedPokemons />
      <SearchPokemons/>
      <PokemonCart />
      <Footer/>
    </>
  );
}

export default App;
