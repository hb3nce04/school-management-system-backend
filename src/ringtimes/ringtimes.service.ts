import { Injectable } from '@nestjs/common';
import { CreateRingtimeDto } from './dto/create-ringtime.dto';
import { UpdateRingtimeDto } from './dto/update-ringtime.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RingtimesService {
  constructor(private prismaService: PrismaService) {}

  create(createRingtimeDto: CreateRingtimeDto): Promise<any> {
    return this.prismaService.ringTime.create({ data: createRingtimeDto });
  }

  findAll(ringId?: number): Promise<any[]> {
    if (ringId) {
      return this.prismaService.ringTime.findMany({
        where: { ringId },
      });
    }
    return this.prismaService.ringTime.findMany();
  }

  findOne(id: number): Promise<any> {
    return this.prismaService.ringTime.findUnique({ where: { id } });
  }

  update(id: number, updateRingtimeDto: UpdateRingtimeDto): Promise<any> {
    return this.prismaService.ringTime.update({
      where: { id },
      data: updateRingtimeDto,
    });
  }

  remove(id: number): Promise<any> {
    return this.prismaService.ringTime.delete({ where: { id } });
  }
}
