import { Controller, Patch, Get, Param, Delete, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Users } from "./user.model";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(":id")
  async findUserById(@Param("id") id: string) {
    const idP = parseInt(id, 10);
    return this.usersService.getUserById(idP);
  }

  @Patch(":id")
  async updateUser(@Param("id") id: string, @Body() data: Users) {
    const idP = parseInt(id, 10);
    return this.usersService.updateUser(idP, data);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    const idP = parseInt(id, 10);
    return this.usersService.softDeleteUser(idP);
  }
}
