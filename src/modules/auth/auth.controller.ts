import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

/**
 *
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   *
   * @param loginDto
   */
  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
  }

  /**
   *
   * @param createUserDto
   */
  @Post('register')
  register(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    return this.authService.register(createUserDto);
  }
}
