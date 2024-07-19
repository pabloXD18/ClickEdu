import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CommonEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createddate: Date;

    @UpdateDateColumn()
    updatedday: Date; 
}