import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ListenerModule } from './listener/listener.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ListenerModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5680'],
        queue: 'mail-queue'
      }
    }
  );
  await app.listen();
}
bootstrap();
