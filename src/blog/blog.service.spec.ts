import { Test, TestingModule } from '@nestjs/testing';
import { BlogService } from './blog.service';
import { getModelToken } from '@nestjs/mongoose';

describe('BlogService', () => {
  let service: BlogService;

  const mockBlogModel = {
    create: jest.fn().mockImplementation( dto => dto ),

    findByIdAndUpdate: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto
    })),

    findById: jest.fn().mockImplementation( id => id ),

    findByIdAndDelete: jest.fn().mockImplementation( id => id ),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogService, {
        provide: getModelToken('Blog'),
        useValue: mockBlogModel
      }],
    }).compile();

    service = module.get<BlogService>(BlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new blog', async() => {
    
    const dto = {
      author: 'author',
      reading_time: '14 horas',
      title: 'title',
      img: ['img', 'img2'],
      description: 'description',
      createdAt: new Date(Date.now())
    }

    expect(await service.createOneBlog(dto)).toEqual({
      author: dto.author,
      reading_time: dto.reading_time,
      title: dto.title,
      img: dto.img,
      description: dto.description,
      createdAt: dto.createdAt
    })

    expect(mockBlogModel.create).toHaveBeenCalled();
  })

  it('should update a new blog', async() => {
    const dto = {
      author: 'authorNew',
      reading_time: '14 horas new',
      title: 'title new',
      img: ['img', 'img2'],
      description: 'description',
      createdAt: new Date(Date.now())
    }

    expect(await service.updateOneBlog('1', dto)).toEqual({
      id: '1',
      ...dto
    })

    expect(mockBlogModel.findByIdAndUpdate).toHaveBeenCalled();
  })

  it('should get an unique blog', async() => {
    const id = '1'

    expect(await service.getOneBlog(id)).toBeTruthy();

    expect(mockBlogModel.findById).toHaveBeenCalled();
  })

  it('should delete a blog', async() => {
    expect(await service.deleteOneBlog('id')).toBeTruthy();

    expect(mockBlogModel.findByIdAndDelete).toHaveBeenCalled();
  })
});
