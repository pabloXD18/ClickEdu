import { CommonEntity } from "src/common/entity/common.entity";
import { Task } from "src/modules/task/entities/task.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class FileTask extends CommonEntity{

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
}