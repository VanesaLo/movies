import { Controller, Get, Param } from "@nestjs/common";
import { HttpServiceCustom } from "./movie.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Movies")
@Controller("movies")
export class MovieController {
  constructor(private readonly movieService: HttpServiceCustom) {}

  @Get("/favorites/:id")
  async findFavoriteMovies(@Param("id") id: string) {
    const idP = parseInt(id, 10);
    return this.movieService.getFavoriteMovies(idP);
  }
}
