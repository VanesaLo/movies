import { Controller, Post, Body, Res, HttpException, Get, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-user.dto";
import { Response, Request } from "express";
import { RegisterUsersDto } from "./dto/register-user.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async login(@Res() response: Response, @Body() loginDto: LoginDto): Promise<any> {
    try {
      const result = await this.authService.login(loginDto);
      return response.status(200).json({
        status: "Ok!",
        message: "Successfully login!",
        result: result,
      });
    } catch (err) {
      if (err instanceof HttpException && err.message == "Usuario no encontrado") {
        return response.status(404).json({
          status: "Error!",
          message: err.message,
        });
      }
      return response.status(500).json({
        status: "Error!",
        message: "Internal Server Error!",
      });
    }
  }

  @Post("/register")
  async register(@Res() response: Response, @Body() registerDto: RegisterUsersDto): Promise<any> {
    try {
      const result = await this.authService.register(registerDto);
      return response.status(200).json({
        status: "Ok!",
        message: "Successfully register user!",
        result: result,
      });
    } catch (err) {
      if (err instanceof HttpException && err.getStatus() == 400) {
        return response.status(400).json({
          status: "Error!",
          message: err.message,
        });
      }
      return response.status(500).json({
        status: "Error!",
        message: "Internal Server Error!",
      });
    }
  }

  @Get("/logout")
  logout(@Req() request: Request): Promise<any> {
    return this.authService.logout(request);
  }
}

