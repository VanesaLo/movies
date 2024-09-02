import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(8, 12)
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

