import { IsString, IsEmail, IsNotEmpty, Length, IsBoolean } from "class-validator";

export class RegisterUsersDto {
  @IsString()
  @Length(3, 1)
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(3, 15)
  lastname: string;

  @IsEmail()
  @Length(5, 50)
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(5, 10)
  username: string;

  @IsString()
  @Length(8, 12)
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  status: boolean = true;

  constructor(name: string, lastname: string, email: string, username: string, password: string) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}

