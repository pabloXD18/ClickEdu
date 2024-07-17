import { Task } from "src/modules/task/entities/task.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class FileTask {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Task)
    @JoinColumn({
        referencedColumnName: 'id',
        name: 'task'
    })
    task: Task

    @ManyToOne(() => File)
    @JoinColumn({
        referencedColumnName: 'id', 
        name: 'file'
    })
    file : File   
    
    @UpdateDateColumn()
    updateday: Date

    @CreateDateColumn()
    createdday: Date
}