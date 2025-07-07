import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (query: GameQuery) => {
  return useData<Game>(
    "games",
    {
      params: {
        genres: query.genre?.id,
        platforms: query.platform?.id,
      },
    },
    [query]
  );
};

export default useGames;
