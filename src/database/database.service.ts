import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseConection = [
    //isGlobal nos permite usar la configuracion en otros modulos de las app
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
]