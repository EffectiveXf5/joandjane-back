import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Destination } from './interface/destination.interface';
import { DestinationDTO } from './dto/destination.dto';

@Injectable()
export class DestinationService {
    constructor(@InjectModel('Destination') private readonly destinationModel: Model<Destination>) {}

    async getAllDestionations(): Promise<Destination[]> {
        const allDestinations = await this.destinationModel.find();
        return allDestinations;
    }
    
    async getOneDestination(destinationID: string): Promise<Destination> {
        const oneDestination = await this.destinationModel.findById(destinationID);
        return oneDestination;
    }

    async createNewDestination(destinationDTO: DestinationDTO): Promise<Destination> {
        const newDestination = await this.destinationModel.create(destinationDTO);
        return newDestination;
    }

    async updateNewDestination(destinationID: string, destinationDTO: DestinationDTO): Promise<Destination> {
        const destinationToUpdate = await this.destinationModel.findByIdAndUpdate(destinationID, destinationDTO,
            { new: true });
        return destinationToUpdate;
    }

    async deleteDestination(destinationID: string): Promise<Destination> {
        const destinationToDelete = await this.destinationModel.findByIdAndDelete(destinationID);
        return destinationToDelete;
    }
}
