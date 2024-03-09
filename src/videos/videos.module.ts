import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { CoursesService } from 'src/courses/courses.service';
import { CoursesModule } from 'src/courses/courses.module';

@Module({
  imports: [CoursesModule],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
