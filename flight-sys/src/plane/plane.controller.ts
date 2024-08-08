import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { PlaneService } from './plane.service';
import { CreatePlaneDto } from './dto/create-plane.dto';
import { UpdatePlaneDto } from './dto/update-plane.dto';
import { ActiveController } from '../../src/active.controller';

@Controller('plane')
export class PlaneController extends ActiveController {
  constructor(private readonly planeService: PlaneService) {
    super(planeService);
  }

  @Post()
  create(@Body() createPlaneDto: CreatePlaneDto) {
    return this.planeService.create(createPlaneDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaneDto: UpdatePlaneDto) {
    return this.planeService.update(id, updatePlaneDto);
  }
}
