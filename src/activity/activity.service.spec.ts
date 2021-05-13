import { Test, TestingModule } from '@nestjs/testing';
import { ActivityService } from './activity.service';
import { getModelToken } from '@nestjs/mongoose';

describe('ActivitiesService', () => {
  let service: ActivityService;

  const mockActivityModel = {
    create: jest.fn().mockImplementation( dto => dto ),

    findByIdAndUpdate: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto
    })),

    find: jest.fn().mockImplementation(),

    findById: jest.fn().mockImplementation( id => id ),

    findByIdAndDelete: jest.fn().mockImplementation( id => id ),
    
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityService, {
        provide: getModelToken('Activity'),
        useValue: mockActivityModel 
      }],
    }).compile();

    service = module.get<ActivityService>(ActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new activity', async () => {

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

    expect(await service.createNewActivity(dto)).toEqual({
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

    expect(mockActivityModel.create).toHaveBeenCalled();
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

    expect(await service.updateOneActivity('1', dto)).toEqual({
      id: '1',
      ...dto
    });

    expect(mockActivityModel.findByIdAndUpdate).toHaveBeenCalled();
  });

  /* it('should get an array of articles', async() => {
    const arrayOfArticles = ({ article: '1', article2: '2' })

    expect(await service.getAllActivities()).toEqual(arrayOfArticles)
    
    expect(mockActivityModel.find).toHaveBeenCalled();
  }); */

  it('should get an unique activity', async() => {
    const id = '1';

    expect(await service.getOneActivity(id)).toBeTruthy();
    
    expect(mockActivityModel.findById).toHaveBeenCalled();
  });

  it('should delete an activity', async() => {
    expect(await service.deleteOneActivity('id')).toBeTruthy();

    expect(mockActivityModel.findByIdAndDelete).toHaveBeenCalled();
  });
});


