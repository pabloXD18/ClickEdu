import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TeacherCourse } from "./teacher-course.entity";
import { User } from "src/modules/user/entities/user.entity";

@Entity()
export class TeacherCourseStudent {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne (() => TeacherCourse)
    @JoinColumn ({
        name: 'teacherCourse'
    })
    teacherCourse: TeacherCourse

    @ManyToOne (() => User)
    @JoinColumn({
        name: 'student'
    })
    student: User

    @CreateDateColumn()
    createdday: Date

    @UpdateDateColumn()
    updateday: Date
}