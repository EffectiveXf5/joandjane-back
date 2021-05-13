import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schema/blog.schema';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Blog', schema: BlogSchema }
        ])
    ],
    providers: [BlogService],
    controllers: [BlogController]
})
export class BlogModule {}
