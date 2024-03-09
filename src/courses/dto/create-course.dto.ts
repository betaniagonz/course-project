import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsUrl } from "class-validator";

export class CreateCourseDto {

    @ApiProperty({
        description: 'The title of the course',
        minimum: 1,
        default: 'Course Title',
      })
    @IsNotEmpty()
    title: string;

    @ApiProperty({
      description: 'The price of the course',
      minimum: 1,
      default: 'Course price',
    })
    @IsNumber()
    @IsNotEmpty()
    price:number;

    @ApiProperty({
      description: 'The description of the course',
      minimum: 1,
      default: 'Course description',
    })
    @IsNotEmpty()
    description:string;

    @ApiProperty({
      description: 'The cover image of the course',
      minimum: 1,
      default: 'https://nestjs.com/logo-small.ede75a6b.svg',
    })
    @IsNotEmpty()
    @IsUrl()
    cover:string;
}
