import { Module } from '@nestjs/common';
import { RingtimesService } from './ringtimes.service';
import { RingtimesController } from './ringtimes.controller';

@Module({
  controllers: [RingtimesController],
  providers: [RingtimesService],
  imports: [],
  exports: [RingtimesService],
})
export class RingtimesModule {}
