import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RingsModule } from './modules/rings/rings.module';
import { RingtimesModule } from './modules/ringtimes/ringtimes.module';
import { UsersModule } from './modules/users/users.module';
import { StudentsModule } from './modules/students/students.module';
import { ClassroomsModule } from './modules/classrooms/classrooms.module';
import { ClassesModule } from './modules/classes/classes.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SchoolsModule } from './modules/schools/schools.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    RingsModule,
    RingtimesModule,
    UsersModule,
    StudentsModule,
    ClassroomsModule,
    ClassesModule,
    AuthModule,
    SchoolsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
