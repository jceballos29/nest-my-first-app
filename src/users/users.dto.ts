import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}

export class UpdateUserDTO {
  @IsString()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;
}
