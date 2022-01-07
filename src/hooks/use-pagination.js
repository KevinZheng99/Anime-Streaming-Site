import { animesPerPage } from "../config";

// Should return an array of paginated list of anime
export function usePagination(currentPage, filmList) {
  // filters out the anime that do not have a popularity ranking
  const filteredFilmList = filmList.filter((anime) => anime.popularity !== 0);

  const startIndex = currentPage * animesPerPage - animesPerPage;
  const endIndex = startIndex + animesPerPage;
  return filteredFilmList.slice(startIndex, endIndex);
}
