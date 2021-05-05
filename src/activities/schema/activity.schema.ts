import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ActivityDocument = Activity & Document;

@Schema()
export class Activity {
    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    img: string[];

    @Prop()
    destination: string[];

    @Prop()
    type: string[];

    @Prop()
    sumary: string;

    @Prop()
    duration: string;
    
    @Prop()
    cancelation: string;
    
    @Prop()
    instant_confirmation: boolean;

    @Prop()
    mobile_ticket: boolean;
    
    @Prop()
    pet_friendly: boolean;
    
    @Prop()
    experience_details: string;
    
    @Prop()
    includes: string[];
    
    @Prop()
    location: string[];
    
    @Prop()
    reviews: object;
    
    @Prop()
    children: boolean;
};

export const ActivitySchema = SchemaFactory.createForClass(Activity);