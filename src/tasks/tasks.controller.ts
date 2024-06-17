import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '../types';

@Controller('tasks')
export class TasksController {
  
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() task: Task) {
    return this.tasksService.createTask(task);
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() task: Task) {
    return this.tasksService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  patchTask(@Param('id') id: string, @Body() task: Task) {
    return this.tasksService.patchTask(id, task);
  }
}