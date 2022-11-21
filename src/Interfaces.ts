export interface PokemonProps {
  id: string;
  name: string;
  sprites: { front_default: string };
  types: [];
  stats: [];
  moves: [];
}

export interface PokemonTypeProps {
  type: { name: string };
}

export interface PokemonStatsProps {
  stat: { name: string };
  id: string;
  base_stat: number;
}
export interface PokemonMovesProps {
  move: { name: string };
}

export interface PokemonModalDataProps {
  modalData: PokemonProps[];
}
export interface PokemonUrlProps {
  url: string;
}
