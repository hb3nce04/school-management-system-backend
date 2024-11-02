import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../prisma/prisma.service';

function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i) rv[arr[i]] = true;
  return rv;
}

@Injectable()
export class StudentsService {
  constructor(private prismaService: PrismaService) {}

  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll(includes: string[]) {
    if (includes.length === 0) {
      return this.prismaService.student.findMany();
    }
    const includeObject = toObject(includes);
    return this.prismaService.student.findMany({
      select: includeObject,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
