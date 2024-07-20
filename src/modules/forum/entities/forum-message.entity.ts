import { CommonEntity } from 'src/common/entity/common.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Forum } from './forum.entity';

@Entity()
export class ForumMessage extends CommonEntity {
  @Column()
  message: string;

  @ManyToOne(() => Forum)
  @JoinColumn()
  forum: Forum;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}
