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
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { AuthTokenPayload } from '../auth/dto/login.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get('getAll')
  @UseGuards(AuthGuard)
  findAll() {
    return this.courseService.findAll();
  }

  @Get('getMyCourses')
  @UseGuards(AuthGuard)
  getMyCourses(@Request() request: Request) {
    const payload = request['payload'] as AuthTokenPayload;
    return this.courseService.findAll({ id: payload.id });
  }

  @Get('states')
  findStates() {
    return this.courseService.findStates();
  }

  @Get('teacherCourses')
  findTeacherCourses() {
    return this.courseService.findTeacherCourses();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
