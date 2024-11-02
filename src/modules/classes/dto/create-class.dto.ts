// model Class {
//     id              Int            @id @default(autoincrement())
//     academyYear     String
//     name            String
//     type            String
//     headTeacherId   Int
//     baseClassroomId Int            @unique
//     description     String
//     isFinalYear     Boolean        @default(false)
//     maxCapacity     Int            @default(30)
//     baseClassroom   Classroom      @relation(fields: [baseClassroomId], references: [id])
//     students        Student[]
//     subjects        Subject[]
//     announcements   Announcement[]
// }

import { IsInt, IsString } from 'class-validator';

export class CreateClassDto {
  @IsString()
  academyYear: string;

  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsInt()
  headTeacherId: number;

  @IsInt()
  baseClassroomId: number;

  @IsString()
  description: string;

  @IsInt()
  maxCapacity: number;

  @IsString()
  isFinalYear: boolean;

  @IsString()
  baseClassroom: string;

  @IsString()
  students: string;
}
