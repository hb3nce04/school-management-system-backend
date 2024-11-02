import { Module } from '@nestjs/common';
import { RingsService } from './rings.service';
import { RingsController } from './rings.controller';
import { RingtimesModule } from '../ringtimes/ringtimes.module';

@Module({
  controllers: [RingsController],
  providers: [RingsService],
  imports: [RingtimesModule],
})
export class RingsModule {}
