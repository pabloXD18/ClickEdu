import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { CourseState } from './entities/course-state.entity';
import { Course } from './entities/course.entity';
import { TeacherCourse } from './entities/teacher-course.entity';
import { Evaluation } from '../evaluation/entities/evaluation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Course, CourseState, TeacherCourse, Evaluation]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
