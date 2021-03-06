import { Document } from 'mongoose'

export interface Blog extends Document {

    readonly author: string;

    readonly reading_time: string;

    readonly title: string;

    readonly img: string;

    readonly description: string;

    readonly createdAt: Date;
}