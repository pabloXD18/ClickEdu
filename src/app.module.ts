import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CourseModule } from './modules/course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';


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
      database: 'educacion',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
