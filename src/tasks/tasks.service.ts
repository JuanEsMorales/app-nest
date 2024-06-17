import { Injectable } from "@nestjs/common";
import { Task } from "src/types";


@Injectable()
export class TasksService {

  private tasks = [
    {
      id: '1',
      title: 'Task 1',
      description: 'This is task 1',
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'This is task 2',
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'This is task 3',
    },
  ]

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(task: Task): string {
    this.tasks.push(task);
    return task.title + ' created';
  }

  getTask(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  updateTask(id: string, task: Task): string {
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks[index] = task;
    return task.title + ' updated';
  }

  deleteTask(id: string): string {
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks.splice(index, 1);
    return 'Task ' + id + ' deleted';
  }

  patchTask(id: string, task: Task): string {
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks[index] = task;
    return task.title + ' patched';
  }
}