import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Column } from 'sequelize-typescript';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  balance: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  subdomain: string;
}
