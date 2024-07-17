import { File } from "src/modules/file/entities/file.entity";
import { Task } from "./task.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskStudent {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne (() => File, file => file.taskstudent)
    @JoinColumn()
    file: File

    // es de ontomany, ya que una tarea de estudiante tendra muchos archivos
    
    @ManyToOne(() => Task, task => task.taskstudents)
    @JoinColumn({referencedColumnName: 'id', name: 'task'})
    task: Task

    @Column()
    grade: number

    @Column()
    createdDay: Date

    @Column()
    updatedDay: Date
}