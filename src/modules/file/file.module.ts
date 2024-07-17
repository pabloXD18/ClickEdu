import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
import { FileTask } from './entities/file-task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([File, FileTask])],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
