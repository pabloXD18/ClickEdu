import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { DeleteResult, UpdateResult } from 'typeorm';
import { AuthTokenPayload } from '../auth/dto/login.dto';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseState } from './entities/course-state.entity';
import { Course } from './entities/course.entity';
import { TeacherCourse } from './entities/teacher-course.entity';

/**
 *
 */
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  /**
   * Creacion de un nuevo curso
   * @param { CreateCourseDto } createCourseDto Datos requeridos para la creacion del curso.
   * @returns { Promise<CreateCourseDto & Course> } Retorna los datos del curso creado.
   */
  @Post()
  create(
    @Body() createCourseDto: CreateCourseDto,
  ): Promise<CreateCourseDto & Course> {
    return this.courseService.create(createCourseDto);
  }

  /**
   * @returns { Promise<Course[]> } Retorna todos los cvursos creados.
   */
  @Get('getAll')
  @UseGuards(AuthGuard)
  findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  /**
   * Metodo para obtener un curso.
   * @param { Request } request S
   * @returns { Promise<Course[]> } Retorna el curso buscado.
   */
  @Get('getMyCourses')
  @UseGuards(AuthGuard)
  getMyCourses(@Request() request: Request): Promise<Course[]> {
    const payload = request['payload'] as AuthTokenPayload;
    return this.courseService.findAll({ id: payload.id });
  }

  /**
   * @returns { Promise<CourseState[]> } retorna estado del curso
   */
  @Get('states')
  findStates(): Promise<CourseState[]> {
    return this.courseService.findStates();
  }

  /**
   * @returns { Promise<TeacherCourse[]> } Retorna el curso al que hace parte el profesor.
   */
  @Get('teacherCourses')
  findTeacherCourses(): Promise<TeacherCourse[]> {
    return this.courseService.findTeacherCourses();
  }

  /**
   * Buscar usuario por id
   * @param { string } id Id del usuario.
   * @returns { Promise<Course> } retorna curso buscado por id del usuario.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  /**
   * Metodo para actulizar curso
   * @param { string } id id del curso.
   * @param { UpdateCourseDto } updateCourseDto Datos de actulizacion del curso.
   * @returns { Promise<UpdateResult> } Retorna lo actulizado.
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ): Promise<UpdateResult> {
    return this.courseService.update(+id, updateCourseDto);
  }

  /**
   * Metodo para eliminar un curso
   * @param { string } id Id del curso a eliminar.
   * @returns { Promise<DeleteResult> } Restorna curso borrado satisfactoriamente.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.courseService.remove(+id);
  }
}
