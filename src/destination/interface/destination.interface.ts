import { Document } from "mongoose"

export interface Destination extends Document {

    readonly title: string;

    readonly img: string;

    readonly numberOfActivities: string;

    readonly createdAt: Date;
}