import { PrismaService } from "src/prisma/prisma.service";
import { Users } from "./user.model";
import { ConflictException, Injectable } from "@nestjs/common";
// import { Users } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<Users[]> {
    return this.prisma.users.findMany({
      where: {
        status: true,
      },
    });
  }

  async getUserById(id: number): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }

  async createUser(data: Users): Promise<Users> {
    const existing = await this.prisma.users.findUnique({
      where: {
        username: data.username,
        email: data.email,
      },
    });

    if (existing) {
      throw new ConflictException("El usuario ya existe");
    }

    return this.prisma.users.create({
      data,
    });
  }

  async updateUser(id: number, data: Users): Promise<Users> {
    return this.prisma.users.update({
      where: { id },
      data,
    });
  }

  async softDeleteUser(userId: number): Promise<Users> {
    return this.prisma.users.update({
      where: { id: userId },
      data: { status: false },
    });
  }
}

