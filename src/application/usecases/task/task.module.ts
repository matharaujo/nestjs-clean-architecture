import { Module } from '@nestjs/common';

import { DomainModule } from '@Domain/domain.module';
import { CreateTaskUseCase } from '@Application/usecases/task/create-task.usecase';

@Module({
    imports: [DomainModule],
    providers: [CreateTaskUseCase],
    exports: [CreateTaskUseCase],
})

export class TaskModule {}
