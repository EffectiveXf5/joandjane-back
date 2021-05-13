import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './interfaces/blog.interface';
import { BlogDTO } from './dto/blog.dto';

@Injectable()
export class BlogService {
    constructor(@InjectModel('Blog') private readonly blogModel: Model<Blog>) {}

    async getAllBlogs(): Promise<Blog[]> {
        const allBlogs = await this.blogModel.find();
        return allBlogs;
    }

    async getOneBlog(blogID: string): Promise<Blog> {
        const oneBlog = await this.blogModel.findById(blogID);
        return oneBlog;
    }

    async createOneBlog(blogDTO: BlogDTO): Promise<Blog> {
        const newBlog = await this.blogModel.create(blogDTO);
        return newBlog;
    }

    async updateOneBlog(blogID: string, blogDTO: BlogDTO): Promise<Blog> {
        const blogToUpdate = await this.blogModel.findByIdAndUpdate(blogID, blogDTO,
            { new: true });
        return blogToUpdate;
    }

    async deleteOneBlog(blogID: string): Promise<Blog> {
        const blogToDelete = await this.blogModel.findByIdAndDelete(blogID);
        return blogToDelete;
    }
}
