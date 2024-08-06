import { CommonEntity } from 'src/common/entity/common.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

/**
 *
 */
@Entity()
export class Evaluation extends CommonEntity {
  @Column()
  description: string;

  @ManyToOne(() => Course, (course) => course.evaluations)
  @JoinColumn()
  course: Course;
}
