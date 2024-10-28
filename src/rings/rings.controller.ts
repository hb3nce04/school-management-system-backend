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
import { RingsService } from './rings.service';
import { CreateRingDto } from './dto/create-ring.dto';
import { UpdateRingDto } from './dto/update-ring.dto';
import { RingtimesService } from '../ringtimes/ringtimes.service';

@Controller('rings')
export class RingsController {
  constructor(
    private readonly ringsService: RingsService,
    private readonly ringTimesService: RingtimesService,
  ) {}

  @Post()
  create(@Body() createRingDto: CreateRingDto) {
    return this.ringsService.create(createRingDto);
  }

  @Get()
  findAll() {
    return this.ringsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const ring = await this.ringsService.findOne(+id);
    if (!ring) {
      throw new HttpException('Ring not found', HttpStatus.NOT_FOUND);
    }
    return ring;
  }

  @Get(':id/ringtimes')
  async findAllWithRingTimes(@Param('id') id: string) {
    let ring = await this.ringsService.findOne(+id); // We check whether the ring exists
    if (!ring) {
      throw new HttpException('Ring not found', HttpStatus.NOT_FOUND);
    }
    // We exclude the redundant ringId field from the response
    ring = await this.ringTimesService.findAll(+id).then((res) => {
      return res.map(({ ringId, ...rest }) => rest);
    });
    return ring;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRingDto: UpdateRingDto) {
    const ring = await this.ringsService.update(+id, updateRingDto);
    if (!ring) {
      throw new HttpException('Ring not found', HttpStatus.NOT_FOUND);
    }
    return ring;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const ring = await this.ringsService.remove(+id);
    if (!ring) {
      throw new HttpException('Ring not found', HttpStatus.NOT_FOUND);
    }
    return ring;
  }
}
