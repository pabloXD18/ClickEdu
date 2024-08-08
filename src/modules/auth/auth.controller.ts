import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

/**
 * Ingreso y registro.
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Autenticación de un usuario al ingresar.
   * @param { LoginDto } loginDto Contiene los datos para la solucitud de ingreso.
   * @returns { Promise<{user: User; token: string}> } Retorna un usuario con su token.
   */
  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ): Promise<{ user: User; token: string }> {
    return this.authService.login(loginDto);
  }

  /**
   * Registro de usuarios nuevos.
   * @param { CreateUserDto } createUserDto parametro para la creacion del usuario.
   * @returns { Promise<void>} no resulve un valor especifico.
   */
  @Post('register')
  register(
    @Body()
    createUserDto: CreateUserDto,
  ): Promise<void> {
    return this.authService.register(createUserDto);
  }
}
