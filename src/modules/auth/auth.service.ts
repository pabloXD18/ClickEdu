import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';
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
   *
   * @param root0
   * @param root0.email
   * @param root0.password
   */
  async login({ email, password }: LoginDto) {
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

  /**
   *
   * @param createUser
   */
  async register(createUser: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUser.password, 10);
    const decryptPassword = createUser.password;
    createUser = { ...createUser, password: hashPassword };
    return this.userService.create(createUser).then(() => {
      //return this.login({ })
    });
  }
}
