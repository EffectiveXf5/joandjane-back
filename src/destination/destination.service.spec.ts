import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { DestinationService } from './destination.service';

describe('DestinationService', () => {
  let service: DestinationService;

  const mockDestinationModel = {
    create: jest.fn().mockImplementation( dto => dto ),

    findByIdAndUpdate: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto
    })),

    findById: jest.fn().mockImplementation( id => id ),

    findByIdAndDelete: jest.fn().mockImplementation( id => id )
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinationService, {
        provide: getModelToken('Destination'),
        useValue: mockDestinationModel
      }],
    }).compile();

    service = module.get<DestinationService>(DestinationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new destination', async() => {
    
    const dto = {
      title: 'title',
      img: 'img',
      numberOfActivities: '13 activities',
      createdAt: new Date(Date.now())
    };

    expect(await service.createNewDestination(dto)).toEqual({
      title: dto.title,
      img: dto.img,
      numberOfActivities: dto.numberOfActivities,
      createdAt: dto.createdAt
    });

    expect(mockDestinationModel.create).toHaveBeenCalled();
  });

  it('should update a destination', async() => {
    const dto = {
      title: 'titleNew',
      img: 'imgNew',
      numberOfActivities: '15 activities new',
      createdAt: new Date(Date.now())
    }

    expect(await service.updateNewDestination('1', dto)).toEqual({
      id: '1',
      ...dto
    });

    expect(mockDestinationModel.findByIdAndUpdate).toHaveBeenCalled();
  });

  it('should get an unique destination', async() => {
    const id = '1';

    expect(await service.getOneDestination(id)).toBeTruthy();

    expect(mockDestinationModel.findById).toHaveBeenCalled();
  });

  it('should delete a destination', async() => {
    /* const id = 'id'; */

    expect(await service.deleteDestination('id')).toBeTruthy();

    expect(mockDestinationModel.findByIdAndDelete).toHaveBeenCalled();
  });
});
