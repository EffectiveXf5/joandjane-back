import { Test, TestingModule } from '@nestjs/testing';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';

describe('ActivityController', () => {
  let controller: ActivityController;

  const mockActivityService = {
    createNewActivity: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto
      }
    }),

    updateOneActivity: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityController],
      providers: [ActivityService],
    })
      .overrideProvider(ActivityService)
      .useValue(mockActivityService)
      .compile();

    controller = module.get<ActivityController>(ActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an activity', async() => {

    const dto = {
      title: 'title',
      price: 12,
      img: ['img1', 'img2'],
      destination: ['destination', 'destination'],
      type: ['type', 'type'],
      sumary: 'sumary',
      duration: 'duration',
      cancelation: 'cancelation',
      instant_confirmation: true,
      mobile_ticket: true,
      pet_friendly: true,
      experience_details: 'experience',
      includes: ['includes', 'includes'],
      location: ['location', 'location'],
      reviews: {
        1: 'review1',
        2: 'review2'
      },
      children: true,
      createdAt: new Date(Date.now())
    }

    expect(await controller.createOneActivity(dto)).toEqual({
      id: expect.any(Number),
      title: dto.title,
      price: dto.price,
      img: dto.img,
      destination: dto.destination,
      type: dto.type,
      sumary: dto.sumary,
      duration: dto.duration,
      cancelation: dto.cancelation,
      instant_confirmation: dto.instant_confirmation,
      mobile_ticket: dto.mobile_ticket,
      pet_friendly: dto.pet_friendly,
      experience_details: dto.experience_details,
      includes: dto.includes,
      location: dto.location,
      reviews: dto.reviews,
      children: dto.children,
      createdAt: dto.createdAt
    });

    expect(mockActivityService.createNewActivity).toHaveBeenCalled();
  });

  it('should update an activity', async() => {
    const dto = {
      title: 'title',
      price: 12,
      img: ['img1', 'img2'],
      destination: ['destination', 'destination'],
      type: ['type', 'type'],
      sumary: 'sumary',
      duration: 'duration',
      cancelation: 'cancelation',
      instant_confirmation: true,
      mobile_ticket: true,
      pet_friendly: true,
      experience_details: 'experience',
      includes: ['includes', 'includes'],
      location: ['location', 'location'],
      reviews: {
        1: 'review1',
        2: 'review2'
      },
      children: true,
      createdAt: new Date(Date.now())
    }

    expect(await controller.updateOneActivity(dto, '1')).toEqual({
      id: '1',
      ...dto
    });

    expect(mockActivityService.updateOneActivity).toHaveBeenCalled();
  });
});
