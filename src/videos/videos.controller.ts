import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, ValidationPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoggerInterceptor } from 'src/utils/logger/logger.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/utils/media.handle';
import { CoursesService } from 'src/courses/courses.service';

@ApiTags('videos')
@UseInterceptors(LoggerInterceptor)
@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService, private readonly coursesService: CoursesService) {}

  @ApiBearerAuth()
  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.create(createVideoDto);
  }

  @Get()
  findAll(@Query('id') query: string) {
    return this.videosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('Que tengo aqui?', id);
    return this.videosService.findOne(+id);
  }

  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(+id, updateVideoDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(+id);
  }

  @Post('upload')// subiendo un archivo con multer de nodejs-express
  @UseInterceptors(FileInterceptor('avatar', {storage}))
  handleUpload(@UploadedFile() file:Express.Multer.File) {
    console.log(file)
  }
}
