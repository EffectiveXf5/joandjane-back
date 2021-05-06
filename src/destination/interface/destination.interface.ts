import { Document } from "mongoose"

export interface Destination extends Document {

    readonly title: string;

    readonly img: number;

    readonly numberOfActivities: string[];

    readonly reatedAt: Date;
}