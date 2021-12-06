import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGem } from './dto/create';
import { GemService } from './gem.service';

@Controller('gems')
export class GemController {
  constructor(private readonly gemService: GemService) {}

  @Post()
  create(@Body() gem: CreateGem): any {
    return this.gemService.create(gem);
  }

  @Get()
  findAll(): string {
    return 'This action returns all gems';
  }
}
