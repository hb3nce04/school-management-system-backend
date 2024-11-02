import { IsBoolean, IsString } from 'class-validator';

export class CreateRingDto {
  @IsString()
  name: string;

  @IsBoolean()
  isActive: boolean;
}
