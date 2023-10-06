import { Module } from '@nestjs/common';
import { photoProviders } from 'src/photo.provider';
import { PhotoService } from 'src/photo.service';
import { DatabaseModule } from './database.module';
import { PhotoController } from 'src/photo.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],
  providers: [
    ...photoProviders,
    PhotoService,
  ],
})
export class PhotoModule {}