import { IsDate, IsNumber } from 'class-validator';

export class CreateRingtimeDto {
  @IsNumber()
  ringId: number;
  @IsNumber()
  no: number;
  @IsDate()
  startTime: Date;
  @IsDate()
  endTime: Date;
}
