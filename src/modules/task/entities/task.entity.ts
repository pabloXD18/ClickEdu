import { CommonEntity } from 'src/common/entity/common.entity';
import { TeacherCourse } from 'src/modules/course/entities/teacher-course.entity';
import { FileTask } from 'src/modules/file/entities/file-task.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { TaskStudent } from './task-student.entity';

@Entity()
export class Task extends CommonEntity {
  @Column()
  descriptio: string;

  @OneToMany(() => FileTask, (filetask) => filetask.task)
  filetasks: FileTask[];

  @OneToMany(() => TaskStudent, (taskstudent) => taskstudent.task)
  taskstudents: TaskStudent[];

  @Column()
  deadline: Date;

  @ManyToOne(() => TeacherCourse, (teacherCourse) => teacherCourse.tasks)
  @JoinColumn()
  teacherCourse: TeacherCourse;
}
