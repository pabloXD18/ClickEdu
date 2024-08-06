import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskStudent } from './entities/task-student.entity';
import { Repository } from 'typeorm';
import { FileTask } from '../file/entities/file-task.entity';

/**
 *
 */
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(TaskStudent)
    private taskStudent: Repository<TaskStudent>,
    @InjectRepository(FileTask)
    private fileTaskRepository: Repository<FileTask>,
  ) {}

  /**
   *
   * @param createTaskDto
   */
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  /**
   *
   */
  findAll() {
    return this.taskRepository.find({
      relations: ['teacherCourse'],
    });
  }

  /**
   *
   * @param id
   */
  findOne(id: number) {
    return this.taskRepository.findOne({ where: { id } });
  }

  /**
   *
   * @param id
   * @param updateTaskDto
   */
  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateTaskDto);
  }

  /**
   *
   * @param id
   */
  remove(id: number) {
    return this.taskRepository.delete(id);
  }

  /**
   *
   */
  findTaskStudent() {
    return this.taskRepository.find({ relations: ['taskStudents'] });
  }

  /**
   *
   */
  findTaskFile() {
    return this.fileTaskRepository.find({ relations: ['task', 'file'] });
  }
}
