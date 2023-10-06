import { Module } from '@nestjs/common';
import { photoProviders } from 'src/photo.provider';
import { PhotoService } from 'src/photo.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...photoProviders,
    PhotoService,
  ],
})
export class PhotoModule {}