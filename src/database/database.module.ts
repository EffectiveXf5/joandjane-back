import { Module } from '@nestjs/common';
import { DatabaseConection } from './database.service';

@Module({
    imports: [...DatabaseConection],
    exports: [...DatabaseConection]
})

export class DatabaseModule {}
