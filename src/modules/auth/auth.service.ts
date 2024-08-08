import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';

/**
 *
 */
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Metodo para el ingreso de un usuario.
   * @param { object } root0 Requerimiento para el ingreso de un usuario.
   * @param { string } root0.email email del usuario.
   * @param { string } root0.password contraseña del usuario.
   * @returns { Promise<{user: User; token: string}> } regresa el usuario con su toquen solo si el ingreso es satisfactorio.
   */
  async login({
    email,
    password,
  }: LoginDto): Promise<{ user: User; token: string }> {
    const user = await this.userService.Email(email);
    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }

    const payload = {
      email: user.email,
      id: user.id,
    };

    const token = await this.jwtService.signAsync(payload);

    const passwordAutorize = await bcrypt.compare(password, user.password);
    if (!passwordAutorize) {
      throw new UnauthorizedException('incorrecto');
    }

    return { user, token };
  }

  /*
    Metodo para el registro de usuario
   @param { CreateUserDto } createUser datos necesarios para la creacion de un usuario.
  
  async register(createUser: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUser.password, 10);
    const decryptPassword = createUser.password;
    createUser = { ...createUser, password: hashPassword };
    return this.userService.create(createUser).then(() => {
      //return this.login({ })
    });
  }
     */
}
