import { TasksService } from './tasks.service';
import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'tasks',
})
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('/')
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById() {
    return this.tasksService.getTaskById();
  }
}
