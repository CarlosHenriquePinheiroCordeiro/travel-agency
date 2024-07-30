import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ListenerModule } from './listener/listener.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ListenerModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.AMQP_URL],
        queue: process.env.QUEUE_NAME,
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
