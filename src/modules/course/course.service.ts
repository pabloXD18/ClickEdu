import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseState } from './entities/course-state.entity';
import { Course } from './entities/course.entity';
import { TeacherCourse } from './entities/teacher-course.entity';
import { Evaluation } from '../evaluation/entities/evaluation.entity';
import { TeacherCourseStudent } from './entities/teacher-course-student.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(CourseState)
    private courseStateRepository: Repository<CourseState>,
    @InjectRepository(TeacherCourse)
    private teacherCourseRepository: Repository<TeacherCourse>,
    @InjectRepository(Evaluation)
    private evaluationRepository: Repository<Evaluation>,
    @InjectRepository(TeacherCourseStudent)
    private teacherCourseStudentRepository: Repository<TeacherCourseStudent>,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    return this.courseRepository.save(createCourseDto);
  }

  findAll(where?: FindOptionsWhere<Course> | FindOptionsWhere<Course>[]) {
    return this.courseRepository.find({ where, relations: ['state'] });
  }

  findOne(id: number) {
    return this.courseRepository.findOne({ where: { id } });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.update(id, updateCourseDto);
  }

  remove(id: number) {
    return this.courseRepository.delete(id);
  }

  findStates() {
    return this.courseStateRepository.find({ relations: ['courses'] });
  }

  findTeacherCourses() {
    return this.teacherCourseRepository.find({
      relations: ['course', 'teacher', 'students'],
    });
  }
}
