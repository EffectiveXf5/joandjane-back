import { Test, TestingModule } from '@nestjs/testing';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

describe('BlogController', () => {
  let controller: BlogController;

  const mockBlogService = {
    createOneBlog: jest.fn((dto) => {
      return {
        ...dto
      }
    }),

    updateOneBlog: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto
    }))
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogController],
      providers: [BlogService]
    })
      .overrideProvider(BlogService)
      .useValue(mockBlogService)
      .compile();

    controller = module.get<BlogController>(BlogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a blog', async() => {
    
    const dto = {
      author: 'author',
      reading_time: '14 horas',
      title: 'title',
      img: 'img',
      description: 'description',
      createdAt: new Date(Date.now())
    }

    expect(await controller.createOneBlog(dto)).toEqual({
      author: dto.author,
      reading_time: dto.reading_time,
      title: dto.title,
      img: dto.img,
      description: dto.description,
      createdAt: dto.createdAt
    })

    expect(mockBlogService.createOneBlog).toHaveBeenCalled();
  })

  it('should update a blog', async() => {
    const dto = {
      author: 'author',
      reading_time: '14 horas',
      title: 'title',
      img: 'img',
      description: 'description',
      createdAt: new Date(Date.now())
    }

    expect(await controller.updateOneBlog(dto, '1')).toEqual({
      id: '1',
      ...dto
    })

    expect(mockBlogService.updateOneBlog).toHaveBeenCalled();
  })
});
