import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityController } from 'src/activity/activity.controller';
import { DestinationService } from './destination.service';
import { DestinationSchema } from './schema/destination.schema';

@Module({
  imports : [
    MongooseModule.forFeature([
      { name: 'Destination', schema: DestinationSchema }
    ])
  ],
  providers: [DestinationService],
  controllers: [ActivityController]
})
export class DestinationModule {}
