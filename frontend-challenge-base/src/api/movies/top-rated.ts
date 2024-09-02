import { endpoints } from "@/services/endpoints";
import { fetchDataMovies } from "@/services/http";

export async function getTopRated(): Promise<any> {
  const response = await fetchDataMovies(endpoints.top_rated.list());
  return response;
}
