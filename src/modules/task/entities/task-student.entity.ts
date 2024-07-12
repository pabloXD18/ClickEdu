import { File } from "src/modules/file/entities/file.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Task } from "./task.entity";

@Entity()
export class TaskStudent {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne (() => File, file => file.taskstudents)
    @JoinColumn()
    file: File

    @ManyToOne(() => Task, task => task.taskstudents)
    @JoinColumn ()
    task: Task

    @Column()
    grade: number

    @CreateDateColumn()
    createdday: Date

    @UpdateDateColumn()
    updateday: Date
}