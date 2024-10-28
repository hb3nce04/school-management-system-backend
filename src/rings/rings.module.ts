import { Module } from '@nestjs/common';
import { RingsService } from './rings.service';
import { RingsController } from './rings.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RingtimesModule } from '../ringtimes/ringtimes.module';

@Module({
  controllers: [RingsController],
  providers: [RingsService],
  imports: [PrismaModule, RingtimesModule],
})
export class RingsModule {}
