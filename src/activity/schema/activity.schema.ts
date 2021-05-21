import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ActivityDocument = Activity & Document;

@Schema()
export class Activity {
    @Prop( { required: true } )
    title: string;

    @Prop()
    price: string;

    @Prop()
    img: string[];

    @Prop( { required: true } )
    destination: string[];

    @Prop()
    type: string[];

    @Prop( { required: true } )
    sumary: string;

    @Prop()
    duration: string;
    
    @Prop()
    cancelation: string;
    
    @Prop()
    instant_confirmation: string;

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
    prepare_experience: string;
    
    @Prop( { type: Object } )
    reviews: object;
    
    @Prop()
    children: boolean;

    @Prop( { default: Date.now } )
    createdAt: Date;
};

export const ActivitySchema = SchemaFactory.createForClass(Activity);