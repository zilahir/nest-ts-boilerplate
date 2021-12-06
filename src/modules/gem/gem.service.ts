import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Gem, GemDocument } from './gem.schema';
import { CreateGem } from './dto/create';

@Injectable()
export class GemService {
  constructor(@InjectModel(Gem.name) private gemModel: Model<GemDocument>) {}

  async create(createCatDto: CreateGem): Promise<Gem> {
    const createdCat = new this.gemModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Gem[]> {
    return this.gemModel.find().exec();
  }
}
