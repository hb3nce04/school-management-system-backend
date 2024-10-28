import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RingsModule } from './rings/rings.module';
import { RingtimesModule } from './ringtimes/ringtimes.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    RingsModule,
    RingtimesModule,
    UsersModule,
    StudentsModule,
    ClassroomsModule,
  ], // ConfigModule.forRoot({ isGlobal: true })
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
