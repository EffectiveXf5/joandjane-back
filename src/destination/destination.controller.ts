import { Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { DestinationService } from './destination.service';
import { Destination } from './interface/destination.interface';
import { DestinationDTO } from './dto/destination.dto';

@Controller('destination')
export class DestinationController {
    constructor(private destinationService: DestinationService) {}

    @Get('/')
    async getAllDestination(): Promise<Destination[]> {
        return await this.destinationService.getAllDestionations();
    }

    @Get('/:destinationID')
    async getOneDestination(@Param('destinationID') destinationID): Promise<Destination> {
        return await this.destinationService.getOneDestination(destinationID);
    }

    @Post('/create-destination')
    createOneDestination(@Body() destinationDTO: DestinationDTO): Promise<Destination> {
        return this.destinationService.createNewDestination(destinationDTO);
    }

    @Put('/update-destination/:destinationID')
    async updateDestination(@Body() destinationDTO: DestinationDTO, @Param('destinationID') destinationID): Promise<Destination> {
        return await this.destinationService.updateNewDestination(destinationID, destinationDTO);
    }

    @Delete('/delete-destination/:destinationID')
    async deleteOneDestination(@Param('destinationID') destinationID): Promise<Destination> {
        return await this.destinationService.deleteDestination(destinationID);
    }
}
