import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks(): string {
    return 'All tasks';
  }

  getTaskById(): string {
    return 'Task by id';
  }
}
