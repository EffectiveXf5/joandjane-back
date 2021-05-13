import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './interfaces/blog.interface';
import { BlogDTO } from './dto/blog.dto';

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) {}

    @Get('/')
    async getAllBlogs(): Promise<Blog[]> {
        return await this.blogService.getAllBlogs();
    }

    @Get('/:blogID')
    async getOneBlog(@Param('blogID') blogID): Promise<Blog> {
        return await this.blogService.getOneBlog(blogID);
    }

    @Post('/create-blog')
    async createOneBlog(@Body() blogDTO: BlogDTO) {
        return await this.blogService.createOneBlog(blogDTO);
    }

    @Put('/update-blog/:blogID')
    async updateOneBlog(@Body() blogDTO: BlogDTO, @Param('blogID') blogID) {
        return await this.blogService.updateOneBlog(blogID, blogDTO);
    }

    @Delete('/delete-blog/:blogID')
    async deleteOneBlog(@Param('blogID') blogID) {
        return await this.blogService.deleteOneBlog(blogID);
    }
}
