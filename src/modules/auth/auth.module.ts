import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtSecret } from 'src/common/constans/jwt-secret';

/**
 *
 */
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: JwtSecret.secret,
      signOptions: { expiresIn: '3000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
