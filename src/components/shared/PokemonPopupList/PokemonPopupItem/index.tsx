import { Avatar, Divider, Typography, Box } from "@mui/material";
import {
  PokemonStatsProps,
  PokemonTypeProps,
  PokemonMovesProps,
} from "Interfaces";
import PokemonType from "components/shared/PokemonCartList/PokemonCart/PokemonType";
import PokemonMoves from "./PokemonMoves";
import PokemonStats from "./PokemonStats";
import { v4 as statsId, v4 as moveId,v4 as typeId } from "uuid";
import { styledMoveList } from "./styles";

const PokemonPopupItem = ({
  pokemonId,
  pokemonName,
  pokemonImg,
  pokemon,
}: any) => {
  return (
    <>
      <Avatar alt={pokemonName} src={pokemonImg} />
      <Typography variant="h6" component="h1">
        {pokemonName}
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Typography variant="h6" component="h1">
        types
      </Typography>
      <Box>
        {pokemon.types.map((pokemonType: PokemonTypeProps) => (
          <PokemonType key={typeId()} pokemonType={pokemonType.type.name} />
        ))}
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Typography variant="h6" component="h1">
        Stats
      </Typography>
      {pokemon.stats.map((pokemon: PokemonStatsProps) => (
        <PokemonStats
          key={statsId()}
          pokemonId={pokemonId}
          pokemonStatName={pokemon.stat.name}
          pokemonBaseStat={pokemon.base_stat}
        />
      ))}
      <Divider sx={{ width: "100%" }} />
      <Typography variant="h6" component="h1">
        Moves
      </Typography>
      <Box sx={styledMoveList} component="ul">
        {pokemon.moves
          .map((pokemon: PokemonMovesProps) => (
            <PokemonMoves key={moveId()} pokemonMove={pokemon.move.name} />
          ))
          .slice(0, 15)}
      </Box>
    </>
  );
};

export default PokemonPopupItem;
