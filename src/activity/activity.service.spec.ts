import { Test, TestingModule } from '@nestjs/testing';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';

describe('ActivitiesService', () => {
  let service: ActivityService;

  const mockActivityController = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityController],
      providers: [ActivityService],
    })
      .overrideProvider(ActivityController)
      .useValue(mockActivityController)
      .compile();

    service = module.get<ActivityService>(ActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
