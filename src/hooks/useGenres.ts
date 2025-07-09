import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    cacheTime: 300_000,
    staleTime: 10 * 1000, //24h
    initialData: genres,
  });
};

export default useGenres;
