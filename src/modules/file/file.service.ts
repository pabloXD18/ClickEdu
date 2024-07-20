import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from 'buffer';
import { Repository } from 'typeorm';
import { FileTask } from './entities/file-task.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private fileRepository: Repository<File>,
    @InjectRepository(FileTask)
    private fileTask: Repository<FileTask>,
  ) {}

  create(CreateFileDto: CreateFileDto) {
    return this.fileRepository.save(CreateFileDto);
  }

  findAll() {
    return this.fileRepository.find({
      relations: ['file'],
    });
  }

  update(id: number, updateTaskDto: UpdateFileDto) {
    return this.fileRepository.update(id, updateTaskDto);
  }

  remove(id: number) {
    return this.fileRepository.delete(id);
  }

  findTaskStudent() {
    return this.fileRepository.find({ relations: ['taskStudents'] });
  }

  findTaskFile() {
    return this.fileRepository.find({ relations: ['task', 'file'] });
  }
}
