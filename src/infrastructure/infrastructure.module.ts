import { Module } from '@nestjs/common';

import { ApplicationModule } from '@Application/application.module';

import { AuthenticationController } from '@Infrastructure/controllers/authentication/authentication.controller';
import { TaskController } from '@Infrastructure/controllers/task/task.controller';

@Module({
    imports: [
        ApplicationModule,
    ],
    controllers: [
        AuthenticationController,
        TaskController,
    ],
})

export class InfrastructureModule {}
