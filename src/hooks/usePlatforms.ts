import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("10s"),
  });
};

export default usePlatforms;
