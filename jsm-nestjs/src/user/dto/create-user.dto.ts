import { isEmail, IsString, minLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @minLength(3)
  name!: string;

  @isEmail()
  email!: string;
}