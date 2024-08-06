import { Evaluation } from './../../evaluation/entities/evaluation.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CourseState } from './course-state.entity';
import { CommonEntity } from 'src/common/entity/common.entity';

/**
 *
 */
@Entity()
export class Course extends CommonEntity {
  @Column()
  name: string;

  @Column()
  descriptio: string;

  @ManyToOne(() => CourseState, (state) => state.courses)
  @JoinColumn({ referencedColumnName: 'id', name: 'state' })
  state: CourseState;

  @OneToMany(() => Evaluation, (evaluation) => evaluation.course)
  evaluations: Evaluation[];
}
