import { Document } from "mongoose"

export interface Activity extends Document {

    readonly title: string;

    readonly price: string;

    readonly img: string[];

    readonly destination: string[];

    readonly type: string[];

    readonly sumary: string;

    readonly duration: string;

    readonly cancelation: string;
    
    readonly instant_confirmation: string;

    readonly mobile_ticket: boolean;

    readonly pet_friendly: boolean;
    
    readonly experience_details: string;
    
    readonly includes: string[];
    
    readonly location: string[]; 

    readonly prepare_experience: string;

    readonly reviews: object;

    readonly children: boolean;

    readonly createdAt: Date;
}