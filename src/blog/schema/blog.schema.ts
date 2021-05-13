import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
    @Prop( { required: true } )
    author: string;

    @Prop( { required: true } )
    reading_time: string;

    @Prop( { required: true } )
    title: string;

    @Prop()
    img: string[];

    @Prop()
    description: string;

    @Prop( { default: Date.now } )
    createdAt: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);