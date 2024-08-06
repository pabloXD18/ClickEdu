import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

/**
 *
 */
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TasksService) {}

  /**
   *
   * @param createTaskDto
   */
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  /**
   *
   */
  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  /**
   *
   * @param id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  /**
   *
   * @param id
   * @param updateTaskDto
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  /**
   *
   * @param id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
