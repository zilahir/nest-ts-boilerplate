import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Image & Document;

@Schema()
export class Image {
  @Prop()
  url: string;
}

export const CatSchema = SchemaFactory.createForClass(Image);
