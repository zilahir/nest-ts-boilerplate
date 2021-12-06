import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GemController } from './gem.controller';
import { GemSchema, Gem } from './gem.schema';
import { GemService } from './gem.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Gem.name, schema: GemSchema }])],
  controllers: [GemController],
  providers: [GemService],
})
export class GemModule {}
