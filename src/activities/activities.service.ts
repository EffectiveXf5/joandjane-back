import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ActivitiesService {
    constructor(@InjectModel('Activity')private readonly activityModel:Model<Activity){}
}