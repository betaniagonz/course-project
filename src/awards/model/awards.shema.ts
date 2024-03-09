import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CourseDocument = Awards & Document;
@Schema()
export class Awards {
    @Prop({required:true})
    title: string;
  
    @Prop()
    idUser: mongoose.Types.ObjectId;
  
    @Prop()
    description:string;
}

export const AwardsSchema = SchemaFactory.createForClass(Awards);