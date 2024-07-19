import { Entity, JoinColumn, ManyToOne} from "typeorm";
import { TeacherCourse } from "./teacher-course.entity";
import { User } from "src/modules/user/entities/user.entity";
import { CommonEntity } from "src/common/entity/common.entity";

@Entity()
export class TeacherCourseStudent extends CommonEntity {
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
}