import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskStudent } from './entities/task-student.entity';
import { FileTask } from '../file/entities/file-task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskStudent, FileTask])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
