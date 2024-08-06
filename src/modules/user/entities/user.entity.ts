import { CommonEntity } from 'src/common/entity/common.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { TeacherCourse } from './../../course/entities/teacher-course.entity';
import { UserType } from './user-type.entity';

/**
 *
 */
@Entity()
export class User extends CommonEntity {
  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  address: string | null;

  @Column({ nullable: true })
  birthday: Date | null;

  @OneToMany(() => TeacherCourse, (teacherCourse) => teacherCourse.teacher)
  teacherCourses: TeacherCourse[];

  @ManyToOne(() => UserType, (usertype) => usertype.users)
  @JoinColumn({ referencedColumnName: 'id', name: 'usertype' })
  usertype: UserType;
}
