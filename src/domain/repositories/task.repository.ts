import { TaskModel } from '@Domain/models/task.model';

export class TaskRepository {
    public async insert(payload: TaskModel): Promise<TaskModel> {
        return payload;
    }
}
