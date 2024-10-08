import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersController } from "./user.controller";

@Module({
  providers: [UsersService, PrismaService],
  exports: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}

