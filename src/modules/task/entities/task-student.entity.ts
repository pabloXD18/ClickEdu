import { CommonEntity } from 'src/common/entity/common.entity';
import { File } from 'src/modules/file/entities/file.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class TaskStudent extends CommonEntity {
  @ManyToOne(() => File, (file) => file.taskstudent)
  @JoinColumn()
  file: File;

  // es de ontomany, ya que una tarea de estudiante tendra muchos archivos

  @ManyToOne(() => Task, (task) => task.taskstudents)
  @JoinColumn({ referencedColumnName: 'id', name: 'task' })
  task: Task;

  @Column()
  grade: number;
}
