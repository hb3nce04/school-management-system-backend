import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RingtimesService } from './ringtimes.service';
import { CreateRingtimeDto } from './dto/create-ringtime.dto';
import { UpdateRingtimeDto } from './dto/update-ringtime.dto';

@Controller('ringtimes')
export class RingtimesController {
  constructor(private readonly ringtimesService: RingtimesService) {}

  @Post()
  create(@Body() createRingtimeDto: CreateRingtimeDto) {
    return this.ringtimesService.create(createRingtimeDto);
  }

  @Get()
  findAll() {
    return this.ringtimesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const ringTime = await this.ringtimesService.findOne(+id);
    if (!ringTime) {
      throw new HttpException('Ringtime not found', HttpStatus.NOT_FOUND);
    }
    return ringTime;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRingtimeDto: UpdateRingtimeDto,
  ) {
    const ringTime = this.ringtimesService.update(+id, updateRingtimeDto);
    if (!ringTime) {
      throw new HttpException('Ringtime not found', HttpStatus.NOT_FOUND);
    }
    return ringTime;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const ringTime = await this;
    if (!ringTime) {
      throw new HttpException('Ringtime not found', HttpStatus.NOT_FOUND);
    }
  }
}
