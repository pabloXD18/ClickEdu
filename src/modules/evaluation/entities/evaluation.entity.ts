import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Evaluation {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descriptio: string

    // @OneToMany(() => ForumMessage, forumMessage => forumMessage.forum)
    // messages: ForumMessage[]

    @CreateDateColumn()
    createdday: Date

    @UpdateDateColumn()
    updateday: Date
}
