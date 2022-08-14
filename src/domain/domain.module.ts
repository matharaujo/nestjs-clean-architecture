import { Module } from '@nestjs/common';

import { TaskRepository } from '@Domain/repositories/task.repository';

@Module({
    imports: [TaskRepository],
    providers: [TaskRepository],
    exports: [TaskRepository],
})

export class DomainModule {}
