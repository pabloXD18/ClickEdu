import { Course } from "src/modules/course/entities/course.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Evaluation {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @ManyToOne(() => Course, course => course.evaluations)
    @JoinColumn()
    course: Course

    @CreateDateColumn()
    createdday: Date

    @UpdateDateColumn()
    updateday: Date
}
