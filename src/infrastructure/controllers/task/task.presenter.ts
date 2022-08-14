import { ApiProperty } from '@nestjs/swagger';

import { TaskModel } from '@Domain/models/task.model';

export class TaskPresenter {
    @ApiProperty()
    public id: number;

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public priority: number;

    @ApiProperty()
    public endDate: Date;

    @ApiProperty()
    public createdAt: Date;

    constructor(task: TaskModel) {
        this.id = task.id;
        this.name = task.name;
        this.priority = task.priority;
        this.endDate = task.endDate;
        this.createdAt = task.createdAt;
    }
}
