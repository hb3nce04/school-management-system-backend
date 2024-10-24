import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [], // ConfigModule.forRoot({ isGlobal: true })
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
