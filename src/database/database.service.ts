import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseConection = [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
]