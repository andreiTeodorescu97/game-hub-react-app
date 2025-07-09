import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";
import { GameQuery } from "../App";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (query: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", query],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("games", {
          params: {
            genres: query.genre?.id,
            parent_platforms: query.platform?.id,
            ordering: query.sortOrder,
            search: query.searchText,
          },
        })
        .then((res) => res.data),
    cacheTime: 300_000,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
