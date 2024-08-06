import { forwardRef, Module } from '@nestjs/common';
import { ServicesOut } from './out';
import { ApplicationModule } from '../application/application.module';
import { GetFlightController } from './in/web/get-flight.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        forwardRef(() => ApplicationModule),
        HttpModule
    ],
    providers: [...ServicesOut],
    exports: [...ServicesOut],
    controllers: [GetFlightController]
})
export class AdapterModule {}
