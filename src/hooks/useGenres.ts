import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/apiClient";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    cacheTime: 300_000,
    staleTime: ms("10s"),
    initialData: genres,
  });
};

export default useGenres;
