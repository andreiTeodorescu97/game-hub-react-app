import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return { data: genres, isLoading: false, error: null };
  //return useData<Genre>("genres");
};

export default useGenres;
