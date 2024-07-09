import { TeacherCourse } from "src/modules/course/entities/teacher-course.entity";
import { FileTask } from "src/modules/file/entities/file-task.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descriptio: string

    @OneToMany(() => FileTask, (filetask) => filetask.task)
    filetasks: FileTask[]

    @Column()
    deadline: Date

    @ManyToOne(() => TeacherCourse, teacherCourse => teacherCourse.tasks)
    @JoinColumn()
    teacherCourse: TeacherCourse

    @CreateDateColumn()
    createdday: Date

    @UpdateDateColumn()
    updateday: Date
}
