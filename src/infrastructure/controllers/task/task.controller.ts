import { Controller, UseGuards, Post, Body, Response, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiExtraModels } from '@nestjs/swagger';

import { JwtGuard } from '@Infrastructure/guards/jwt.guard';
import { ApiResponseType } from '@Infrastructure/decorators/swagger.decorator';
import { TaskPresenter } from '@Infrastructure/controllers/task/task.presenter';
import { CreateTaskDTO } from '@Infrastructure/controllers/task/task.dto';
import { CreateTaskUseCase } from '@Application/usecases/task/create-task.usecase';

@Controller('task/')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@ApiTags('task')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(TaskPresenter)
export class TaskController {
    constructor(private readonly createTaskUseCase: CreateTaskUseCase) {}

    @Post()
    @ApiResponseType(TaskPresenter)
    public async createTask(
        @Body() payload: CreateTaskDTO, 
        @Response() response,
    ): Promise<TaskPresenter> {
        const task = await this.createTaskUseCase.execute(payload);

        return response.status(HttpStatus.OK).json(task);
    }
}
