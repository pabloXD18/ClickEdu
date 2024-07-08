import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descriptio: string

    @CreateDateColumn()
    createdday: Date

    @UpdateDateColumn()
    updateday: Date
}
