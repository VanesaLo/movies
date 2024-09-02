import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { HttpServiceCustom } from "./movie.service";
import { UsersService } from "src/users/users.service";
import { MovieController } from "./movie.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [HttpModule, PrismaModule],
  providers: [HttpServiceCustom, UsersService],
  exports: [HttpModule, HttpServiceCustom],
  controllers: [MovieController],
})
export class ProviderModule {}

