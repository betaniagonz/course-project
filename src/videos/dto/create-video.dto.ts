import { IsNotEmpty, IsString, IsUrl, Length } from 'class-validator';

export class CreateVideoDto {

    @IsNotEmpty()
    @IsString()
    @Length(1,30)
    title: string;

    @IsNotEmpty()
    @IsString()
    @Length(1,80)
    description: string;

    @IsUrl()
    source: string;
}
