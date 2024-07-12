import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Course } from "./course.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Task } from "src/modules/task/entities/task.entity";
import { TeacherCourseStudent } from "./teacher-course-student.entity";

@Entity()
export class TeacherCourse {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.teacherCourses)
    @JoinColumn({referencedColumnName: 'id', name: 'teacher'})
    teacher: User

    @ManyToOne(() => Course)
    @JoinColumn({referencedColumnName: 'id', name: 'course'})
    course: Course


    @ManyToMany(() => User)
    @JoinTable({
        name: 'teacher_course_student',
        joinColumn: {
            name: 'teacherCourse',
            referencedColumnName: 'id',
            foreignKeyConstraintName: 'teacher_course_student_ibfk_1'
        },
        inverseJoinColumn:
        {
            name: 'student',
            referencedColumnName: 'id',
            foreignKeyConstraintName: 'teacher_course_student_ibfk_2'
        }
    })
    students: User[]

    @OneToMany (() => Task, (task) => task.teacherCourse)
    tasks: Task[]

    @Column()
    hours: number

    @Column({nullable: true})
    day: string

    @CreateDateColumn()
    createdday: Date

    @UpdateDateColumn()
    updateday: Date
}