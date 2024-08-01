import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskStudent } from './entities/task-student.entity';
import { FileTask } from '../file/entities/file-task.entity';
import { TasksService } from './task.service';
import { File } from '../file/entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskStudent, FileTask, File])],
  controllers: [TaskController],
  providers: [TasksService],
})
export class TaskModule {}
