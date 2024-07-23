import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login({ email, password }: LoginDto) {
    const user = await this.userService.Email(email);
    if (!user) {
      throw new UnauthorizedException("email is wrong");
    }
    if (password != user.password) {
      throw new UnauthorizedException("password is wrong");
    }
    return user;

    const passwordAutorize = await bcrypt.compare(password, user.password);
    if (passwordAutorize) {
      throw new UnauthorizedException("incorrecto");
    }
  }

  async register (createUser: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUser.password, 10);
    createUser = {...createUser, password: hashPassword};
    return this.userService.create(createUser);

  }






}

