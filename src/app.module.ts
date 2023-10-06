import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database.module';
import { PhotoModule } from './modules/photo.module';

@Module({
  imports: [DatabaseModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
