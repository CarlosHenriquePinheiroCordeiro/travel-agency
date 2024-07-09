import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlaneService } from './plane.service';
import { CreatePlaneDto } from './dto/create-plane.dto';
import { UpdatePlaneDto } from './dto/update-plane.dto';

@Controller('plane')
export class PlaneController {
  constructor(private readonly planeService: PlaneService) {}

  @Post()
  create(@Body() createPlaneDto: CreatePlaneDto) {
    return this.planeService.create(createPlaneDto);
  }

  @Get()
  findAll() {
    return this.planeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaneDto: UpdatePlaneDto) {
    return this.planeService.update(+id, updatePlaneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planeService.remove(+id);
  }
}
