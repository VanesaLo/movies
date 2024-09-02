import { HttpService } from "@nestjs/axios";
import { HttpException, Injectable } from "@nestjs/common";
import { catchError, firstValueFrom } from "rxjs";
import { UsersService } from "../users/users.service";

@Injectable()
export class HttpServiceCustom {
  constructor(
    private readonly httpService: HttpService,
    private readonly usersService: UsersService,
  ) {}
  token = process.env.MOVIES_API_KEY;
  async getFavoriteMovies(id: number) {
    const userId = await this.usersService.getUserById(id);
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          `https://api.themoviedb.org/3/account${userId?.name}/favorite/movies`,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        ),
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      if (error instanceof HttpException && error.getStatus() == 400) {
        throw new Error(`Error fetching movies: ${error.message}`);
      }
    }
  }
}

