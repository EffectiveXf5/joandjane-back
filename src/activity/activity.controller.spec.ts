import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
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

  it('should create a activity', async() => {

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

    expect(await controller.createOneActivity(Res, dto)).toEqual({
      id: expect.any(String),
      title: dto.title,
    });

    expect(mockActivityService.createNewActivity).toHaveBeenCalledWith(dto)
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

    expect(await controller.updateOneActivity(Res, dto, '1'))
  });
});
