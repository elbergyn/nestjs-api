import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Column, DataType, Default, IsNull } from 'sequelize-typescript';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  balance: number;

  @IsString()
  @IsNotEmpty()
  subdomain: string;
}
