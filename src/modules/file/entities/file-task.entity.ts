import { Task } from "src/modules/task/entities/task.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FileTask {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Task, task => task.filetasks)
    @JoinColumn()
    task: Task

}