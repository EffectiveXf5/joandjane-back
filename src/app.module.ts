import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ActivitiesModule } from './activity/activity.module';
import { DestinationController } from './destination/destination.controller';
import { DestinationModule } from './destination/destination.module';

@Module({
  imports: [DatabaseModule, ActivitiesModule, DestinationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
