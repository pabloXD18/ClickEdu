import { Evaluation } from './../../evaluation/entities/evaluation.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CourseState } from "./course-state.entity";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    descriptio: string

    @ManyToOne(() => CourseState, (state) => state.courses)
    @JoinColumn({referencedColumnName: 'id', name: 'state'})
    state: CourseState

    @OneToMany(() => Evaluation, (evaluation) => evaluation.course)
    evaluations: Evaluation[]

    @CreateDateColumn()
    createdday: Date

    @UpdateDateColumn()
    updateday: Date
}
