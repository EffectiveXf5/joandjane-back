import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './schema/activity.schema';
import { ActivityDTO } from './dto/activity.dto';

@Controller('activity')
export class ActivityController {
    constructor(private activityService: ActivityService) {}

    @Get('/')
    async getAllActivities(@Res() res): Promise<Activity> {
        const allActivities = await this.activityService.getAllActivities();
        if (!allActivities) throw new NotFoundException('Was an error, activities not found');
        return res.status(HttpStatus.OK).json({
            msg: 'Got all activities correctly',
            allActivities
        });
    };

    @Get('/:activityID')
    async getOneActivity(@Res() res, @Param('activityID') activityID): Promise<Activity> {
        const oneActivity = await this.activityService.getOneActivity(activityID);
        if (!oneActivity) throw new NotFoundException('Was an error, activity not found');
        return res.status(HttpStatus.OK).json({
            msg: 'Got activity correctly',
            oneActivity
        });
    };

    @Post('/create-activity')
    async createOneActivity(@Res() res, @Body() activityDTO: ActivityDTO) {
        const activityToCreate = await this.activityService.createNewActivity(activityDTO);
        if (!activityToCreate) throw new NotFoundException('Was an error, activity not created');
        return res.status(HttpStatus.OK).json({
            msg: 'Activity created correctly',
            activityToCreate
        });
    };

    @Put('/update-activity/:activityID')
    async updateOneActivity(@Res() res, @Body() activityDTO: ActivityDTO, @Param('activityID') activityID) {
        const activityToUpdate = await this.activityService.updateOneActivity(activityID, activityDTO);
        if (!activityToUpdate) throw new NotFoundException('Was an error, activity not updated');
        return res.status(HttpStatus.OK).json({
            msg: 'Activity updated correctly',
            activityToUpdate
        });
    };

    @Delete('/delete-activity/:activityID')
    async deleteOneActivity(@Res() res, @Param('activityID') activityID) {
        const activityToDelete = this.activityService.deleteOneActivity(activityID);
        if (!activityToDelete) throw new NotFoundException('Was an error, activity not deleted');
        return res.status(HttpStatus.OK).json({
            msg: 'Activity deleted correctly',
            activityToDelete
        });
    };
};
