import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Hashtag & Document;

@Schema()
export class Hashtag {
  @Prop()
  name: string;

  @Prop()
  createdAt: number;
}

export const HashtagSchema = SchemaFactory.createForClass(Hashtag);
