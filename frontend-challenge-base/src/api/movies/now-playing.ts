import { endpoints } from "@/services/endpoints";
import { fetchDataMovies } from "@/services/http";

export async function getNowPlaying(): Promise<any> {
  const response = await fetchDataMovies(endpoints.now_playing.list());
  return response;
}
