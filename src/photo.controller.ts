import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './entity/photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  //get all users
  @Get()
  async findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
}