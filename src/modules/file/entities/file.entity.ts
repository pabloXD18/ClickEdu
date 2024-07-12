import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { FileTask } from "./file-task.entity";
import { TaskStudent } from "src/modules/task/entities/task-student.entity";


@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    lastname: string

    @Column()
    url: string

    @Column()
    extension: string

    @OneToMany(() => FileTask, (filetask) => filetask.task)
    file: File

    @OneToMany(() => TaskStudent, (taskstudent) => taskstudent.file)
    taskstudents: TaskStudent[]

    @CreateDateColumn()
    createdday: Date

    @UpdateDateColumn()
    updateday: Date
}
