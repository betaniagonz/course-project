import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SlugPipe } from './pipes/slug.pipe';

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @HttpCode(201)
  create(@Body() create: CreateCourseDto) {
    return this.coursesService.create(create);
  }

  @Get(':title')
  getDetail(@Param('title', new SlugPipe()) title:string){
    console.log(title)
    return this.coursesService.findOne(1);
  }

}
