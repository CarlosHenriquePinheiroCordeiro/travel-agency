import { Get } from '@nestjs/common';
import { DefaultController } from './default.controller';
import { ActiveService } from './active.service';

export abstract class ActiveController extends DefaultController {
  constructor(private readonly activeService: ActiveService) {
    super(activeService);
  }

  @Get('all')
  findAll() {
    return this.activeService.findAll();
  }

  @Get()
  findAllActive() {
    return this.activeService.findAllActive();
  }
}
