import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  id: number;

  @IsString()
  title: string;

  @IsString()
  body: string;
}
