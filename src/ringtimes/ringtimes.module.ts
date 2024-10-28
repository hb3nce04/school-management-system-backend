import { Module } from '@nestjs/common';
import { RingtimesService } from './ringtimes.service';
import { RingtimesController } from './ringtimes.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [RingtimesController],
  providers: [RingtimesService],
  imports: [PrismaModule],
  exports: [RingtimesService],
})
export class RingtimesModule {}
