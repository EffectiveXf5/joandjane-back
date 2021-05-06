import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DestinationDocument = Destination & Document;

@Schema()
export class Destination {
    @Prop()
    title: string;

    @Prop()
    img: string;

    @Prop()
    numberOfActivities: string;

    @Prop( { default: Date.now })
    createdAt: Date;
};

export const DestinationSchema = SchemaFactory.createForClass(Destination);