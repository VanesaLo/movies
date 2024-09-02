import { endpoints } from "@/services/endpoints";
import { fetchDataMovies } from "@/services/http";

export async function getPopular(): Promise<any> {
  const response = await fetchDataMovies(endpoints.popular.list());
  return response;
}
