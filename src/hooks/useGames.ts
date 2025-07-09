import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const apiClient = new APIClient<Game>("games");

const useGames = (query: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", query],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          genres: query.genreId,
          parent_platforms: query.platformId,
          ordering: query.sortOrder,
          search: query.searchText,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.next) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
