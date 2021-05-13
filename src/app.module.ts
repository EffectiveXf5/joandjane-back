import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ActivitiesModule } from './activity/activity.module';
import { DestinationModule } from './destination/destination.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [DatabaseModule, ActivitiesModule, DestinationModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
