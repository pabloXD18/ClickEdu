import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DeleteResult,
  FindOptionsWhere,
  Repository,
  UpdateResult,
} from 'typeorm';
import { Evaluation } from '../evaluation/entities/evaluation.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseState } from './entities/course-state.entity';
import { Course } from './entities/course.entity';
import { TeacherCourseStudent } from './entities/teacher-course-student.entity';
import { TeacherCourse } from './entities/teacher-course.entity';

/**
 *
 */
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

  /**
   * Creacion de un curso
   * @param { CreateCourseDto } createCourseDto datos para la creacion de un curso.
   * @returns { Promise<CreateCourseDto & Course> } Retorna resultado del curso creado.
   */
  create(createCourseDto: CreateCourseDto) {
    return this.courseRepository.save(createCourseDto);
  }

  /**
   * Buscar todo los cursos creado
   * @param { FindOptionsWhere<Course> | FindOptionsWhere<Course>[] } where condicion obsional para mostrar resultado.
   * @returns { Promise<Course[]> } Retorna resultado de todos los cursos creado.
   */
  findAll(
    where?: FindOptionsWhere<Course> | FindOptionsWhere<Course>[],
  ): Promise<Course[]> {
    return this.courseRepository.find({ where, relations: ['state'] });
  }

  /**
   * Encontrar curso por id
   * @param { number } id id del curso a buscar.
   * @returns { Promise<Course> } retorna curso buscado.
   */
  findOne(id: number): Promise<Course> {
    return this.courseRepository.findOne({ where: { id } });
  }

  /**
   * Actulizar curso.
   * @param { number } id id del curso para actulizar.
   * @param { UpdateCourseDto } updateCourseDto Retorna curso actulizado.
   * @returns { Promise<UpdateResult> } mustra el curso actualizado
   */
  update(id: number, updateCourseDto: UpdateCourseDto): Promise<UpdateResult> {
    return this.courseRepository.update(id, updateCourseDto);
  }

  /**
   * Remover curso
   * @param { number } id id del curso a remover.
   * @returns { Promise<DeleteResult> } retorna curso borrado.
   */
  remove(id: number): Promise<DeleteResult> {
    return this.courseRepository.delete(id);
  }

  /**
   * @returns { Promise<CourseState[]> } Muestra estado del curso
   */
  findStates() {
    return this.courseStateRepository.find({ relations: ['courses'] });
  }

  /**
   * @returns { Promise<TeacherCourse[]> } Muestra el profesor del curso que tiene.
   */
  findTeacherCourses() {
    return this.teacherCourseRepository.find({
      relations: ['course', 'teacher', 'students'],
    });
  }
}
