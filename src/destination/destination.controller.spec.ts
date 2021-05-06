import { Test, TestingModule } from '@nestjs/testing';
import { DestinationController } from './destination.controller';
import { DestinationService } from './destination.service';

describe('DestinationController', () => {
  let controller: DestinationController;

  const mockDestinationService = {
    createNewDestination: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto
      }
    })
  }; 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinationController],
      providers: [DestinationService],
    })
    
    .overrideProvider(DestinationService)
    .useValue(mockDestinationService)
    .compile();

    controller = module.get<DestinationController>(DestinationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a destination', () => {
    const dto = {
      title: 'titlename',
      img: 'an image',
      numberOfActivities: '20 activities',
      createdAt: new Date(Date.now())
    }

    expect(controller.createOneDestination(dto)).toEqual({
       id: expect.any(Number),
       title: dto.title,
       img: dto.img,
       numberOfActivities: dto.numberOfActivities,
       createdAt: dto.createdAt
    })
  })
});
