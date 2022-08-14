import { Injectable } from '@nestjs/common';

import { TaskModel } from '@Domain/models/task.model';
import { TaskRepository } from '@Domain/repositories/task.repository';

@Injectable()
export class CreateTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) {}

    public async execute(payload): Promise<TaskModel> {
        return this.taskRepository.insert(payload);
    }
}
