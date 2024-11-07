import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../../common/modules/prisma/prisma.service';
import { convertFieldsToPrismaSelect } from '../../common/utils/prisma.util';

@Injectable()
export class StudentsService {
  constructor(private prismaService: PrismaService) {}

  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll(fields?: string[]) {
    return this.prismaService.student.findMany({
      select: convertFieldsToPrismaSelect(fields),
    });
  }

  findOne(id: number, fields?: string[]) {
    return this.prismaService.student.findUnique({
      where: { id },
      select: convertFieldsToPrismaSelect(fields),
    });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
