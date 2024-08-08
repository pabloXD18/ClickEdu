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
import { AuthTokenPayload } from '../auth/dto/login.dto';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

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
   * @returns { Promise<CourseState[]> }
   */
  @Get('states')
  findStates() {
    return this.courseService.findStates();
  }

  /**
   *
   */
  @Get('teacherCourses')
  findTeacherCourses() {
    return this.courseService.findTeacherCourses();
  }

  /**
   *
   * @param id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  /**
   *
   * @param id
   * @param updateCourseDto
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  /**
   *
   * @param id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
