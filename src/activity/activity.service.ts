import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity } from './interfaces/activity.interface';
import { ActivityDTO } from './dto/activity.dto';

@Injectable()
export class ActivityService {
    constructor(@InjectModel('Activity') private readonly activityModel: Model<Activity>){}

    async getAllActivities(): Promise<Activity[]> {
        const allActivities = await this.activityModel.find();
        return allActivities;
    }

    async getOneActivity(activityID: string): Promise<Activity> {
        const oneActivity = await this.activityModel.findById(activityID);
        return oneActivity;
    }

    async createNewActivity(activityDTO: ActivityDTO): Promise<Activity> {
        const newActivity = await this.activityModel.create(activityDTO);
        return newActivity;
    }

    async updateOneActivity(activityID: string, activityDTO: ActivityDTO): Promise<Activity> {
        const activityToUpdate = await this.activityModel.findByIdAndUpdate(activityID, activityDTO,
            { new: true });
        return activityToUpdate;
    }

    async deleteOneActivity(activityID: string): Promise<Activity> {
        const activityToDelete = await this.activityModel.findByIdAndDelete(activityID);
        return activityToDelete;
    }
};