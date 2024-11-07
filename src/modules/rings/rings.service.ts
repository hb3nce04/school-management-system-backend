import { Injectable } from '@nestjs/common';
import { CreateRingDto } from './dto/create-ring.dto';
import { UpdateRingDto } from './dto/update-ring.dto';
import { PrismaService } from '../../common/modules/prisma/prisma.service';

@Injectable()
export class RingsService {
  constructor(private prismaService: PrismaService) {}

  create(createRingDto: CreateRingDto): Promise<any> {
    return this.prismaService.ring.create({ data: createRingDto });
  }

  findAll(): Promise<any[]> {
    return this.prismaService.ring.findMany();
  }

  findOne(id: number): Promise<any> {
    return this.prismaService.ring.findUnique({ where: { id } });
  }

  update(id: number, updateRingDto: UpdateRingDto): Promise<any> {
    return this.prismaService.ring.update({
      where: { id },
      data: updateRingDto,
    });
  }

  remove(id: number): Promise<any> {
    return this.prismaService.ring.delete({ where: { id } });
  }
}
