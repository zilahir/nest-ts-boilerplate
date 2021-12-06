import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Hashtag } from '../hashtag/hashtag.schema';
import { Image } from '../image/image.schema';

export type GemDocument = Gem & Document;

@Schema()
export class Gem {
  @Prop()
  name: string;

  @Prop()
  createdAt: number;

  @Prop()
  owner: string;

  @Prop()
  desc: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hashtag' })
  hashtags: Hashtag[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Image' })
  photos: Image[];
}

export const GemSchema = SchemaFactory.createForClass(Gem);
