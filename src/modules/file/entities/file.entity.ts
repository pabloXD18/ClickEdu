import { CommonEntity } from 'src/common/entity/common.entity';
import { TaskStudent } from 'src/modules/task/entities/task-student.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class File extends CommonEntity {
  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  url: string;

  @Column()
  extension: string;

  // @OneToMany(() => FileTask, (filetask) => filetask.file)
  // filetask: FileTask[];

  @OneToMany(() => TaskStudent, (taskstudent) => taskstudent.file)
  taskstudent: TaskStudent[];

  @Column()
  size: number;
}
