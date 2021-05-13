import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ActivitiesModule } from './activity/activity.module';
import { DestinationController } from './destination/destination.controller';
import { DestinationModule } from './destination/destination.module';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [DatabaseModule, ActivitiesModule, DestinationModule, BlogModule],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService],
})
export class AppModule {}
