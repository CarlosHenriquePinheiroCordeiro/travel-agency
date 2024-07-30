import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { EmitterService } from 'src/emitter/emitter.service';
import { MailDto } from './dto/mail.dto';

@Controller()
export class ListenerController {
  constructor(
    private readonly emitterService: EmitterService
  ) {}

  @EventPattern('send-email')
  async listenEmailMsg(@Payload() mailData: MailDto) {
    console.log('RECEBI');
    console.log(mailData);
    return await this.emitterService.sendEmail(mailData);
  }


}
