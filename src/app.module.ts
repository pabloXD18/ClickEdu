import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CourseModule } from './modules/course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumModule } from './modules/forum/forum.module';
import { EvaluationModule } from './modules/evaluation/evaluation.module';
import { TaskModule } from './modules/task/task.module';
import { FileModule } from './modules/file/file.module';


@Module({
  imports: [
    UserModule, 
    CourseModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'eduline',
      autoLoadEntities: true,
    }),
    ForumModule,
    EvaluationModule,
    TaskModule,
    FileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
