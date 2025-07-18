import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/apiClient";
import useGameQueryStore from "../store";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("games");

const useGames = () => {
  const query = useGameQueryStore((s) => s.gameQuery);
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
    staleTime: ms("24h"),
  });
};

export default useGames;
