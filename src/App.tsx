import Footer from "./componentes/footer/Footer";
import PokemonCart from "./componentes/pokemonCart/PokemonCart";
import SavedPokemons from "./componentes/savedPokemons/SavedPokemons";
import SearchPokemons from "./componentes/searchPokemons/SearchPokemons";

function App() {
  return (
    <>
      <SavedPokemons />
      <SearchPokemons />
      <PokemonCart />
      <Footer/>
    </>
  );
}

export default App;
