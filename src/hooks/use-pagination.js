import { animesPerPage } from "../config";

// Should return an array of paginated list of anime
export function usePagination(currentPage, filmList) {
  const startIndex = currentPage * animesPerPage - animesPerPage;
  const endIndex = startIndex + animesPerPage;
  return filmList.slice(startIndex, endIndex);
}
