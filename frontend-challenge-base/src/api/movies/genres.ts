import { endpoints } from "@/services/endpoints";
import { fetchDataMovies } from "@/services/http";

export async function getGenres(params?: string): Promise<any> {
  const response = await fetchDataMovies(endpoints.genres.list(params));
  return response;
}
