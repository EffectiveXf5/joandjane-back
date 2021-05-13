import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DestinationService } from './destination.service';
import { DestinationSchema } from './schema/destination.schema';
import { DestinationController } from './destination.controller';

@Module({
  imports : [
    MongooseModule.forFeature([
      { name: 'Destination', schema: DestinationSchema }
    ])
  ],
  providers: [DestinationService],
  controllers: [DestinationController]
})
export class DestinationModule {}
