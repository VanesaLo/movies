import { HttpStatus, Injectable, NotFoundException, Req } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import type { LoginDto } from "./dto/login-user.dto";
import * as bcrypt from "bcrypt";
import type { RegisterUsersDto } from "./dto/register-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Users } from "src/users/user.model";
import { Request } from "express";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async login(user: LoginDto): Promise<any> {
    const { email, password } = user;

    const userFind = await this.prismaService.users.findUnique({
      where: {
        email,
      },
    });

    if (!userFind) {
      throw new NotFoundException("Usuario no encontrado");
    }

    const validatePassword = await bcrypt.compare(password, userFind.password);

    if (!validatePassword) {
      throw new NotFoundException("Contraseña incorrecta");
    }

    return {
      token: this.jwtService.sign({
        email,
      }),
    };
  }

  async register(createDto: RegisterUsersDto): Promise<any> {
    const hashedPassword = await bcrypt.hash(createDto.password, 10);

    const createUser = new Users(
      createDto.name,
      createDto.lastname,
      createDto.email,
      createDto.username,
      hashedPassword,
      createDto.status,
    );

    const user = await this.usersService.createUser(createUser);

    return {
      token: this.jwtService.sign({ email: user.email }),
    };
  }

  async logout(@Req() request: Request): Promise<any> {
    return {
      message: "Logout successful",
      statusCode: HttpStatus.OK,
    };
  }
}

