import { ApiProperty } from "@nestjs/swagger";
import type { Prisma } from "@prisma/client";

export class Users implements Prisma.UsersCreateInput {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  email: string;

  avatar?: string | null | undefined;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  status: boolean;

  constructor(
    name: string,
    lastname: string,
    email: string,
    username: string,
    password: string,
    status: boolean,
  ) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.username = username;
    this.password = password;
    this.status = status;
  }
}
