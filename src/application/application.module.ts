import { Module } from '@nestjs/common';

import { DomainModule } from '@Domain/domain.module';
import { AuthenticationModule } from '@Application/usecases/authentication/authentication.module';
import { TaskModule } from '@Application/usecases/task/task.module';

@Module({
    imports: [
        DomainModule,
        AuthenticationModule, 
        TaskModule,
    ],
    providers: [
        AuthenticationModule,
        TaskModule,
    ],
    exports: [
        AuthenticationModule,
        TaskModule,
    ],
})

export class ApplicationModule {}
