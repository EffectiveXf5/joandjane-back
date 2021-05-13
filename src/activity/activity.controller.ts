import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityDTO } from './dto/activity.dto';
import { Activity } from './interfaces/activity.interface';

@Controller('activity')
export class ActivityController {
    constructor(private activityService: ActivityService) {}

    @Get('/')
    async getAllActivities(): Promise<Activity[]> {
        return await this.activityService.getAllActivities();
    };

    @Get('/:activityID')
    async getOneActivity(@Param('activityID') activityID): Promise<Activity> {
        return await this.activityService.getOneActivity(activityID);
    };

    @Post('/create-activity')
    async createOneActivity(@Body() activityDTO: ActivityDTO) {
        return await this.activityService.createNewActivity(activityDTO);
    };

    @Put('/update-activity/:activityID')
    async updateOneActivity(@Body() activityDTO: ActivityDTO, @Param('activityID') activityID) {
        return await this.activityService.updateOneActivity(activityID, activityDTO);
    };

    @Delete('/delete-activity/:activityID')
    async deleteOneActivity(@Param('activityID') activityID) {
        return await this.activityService.deleteOneActivity(activityID);
    };
};
