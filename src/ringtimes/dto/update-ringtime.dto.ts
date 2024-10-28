import { PartialType } from '@nestjs/mapped-types';
import { CreateRingtimeDto } from './create-ringtime.dto';

export class UpdateRingtimeDto extends PartialType(CreateRingtimeDto) {}
