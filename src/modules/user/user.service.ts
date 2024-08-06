import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './entities/user-type.entity';
import { User } from './entities/user.entity';

/**
 * Manipulacion de la entity.User y UserType
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   *
   * @param email
   */
  Email(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  /**
   * Metodo para crear un usuario.
   * @param {CreateUserDto} createUserDto Datos necesarios para crear un usuario.
   * @returns {Promise<number>} Id del usuario creado
   */
  async create(createUserDto: CreateUserDto): Promise<number> {
    const user = await this.userRepository.save(createUserDto);
    return user.id;
  }

  /**
   *
   */
  findAll() {
    return this.userRepository.find({
      relations: ['usertype'],
    });
  }

  /**
   *
   * @param id
   */
  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  /**
   *
   * @param id
   * @param updateUserDto
   */
  async update(id: number, updateUserDto: UpdateUserDto) {
    const response = await this.userRepository.update(id, updateUserDto);
    return response.affected > 0;
  }

  /**
   *
   * @param id
   */
  async remove(id: number) {
    const response = await this.userRepository.delete(id);
    return response.affected > 0;
  }

  /**
   *
   */
  getUserTypes() {
    return this.userTypeRepository.find({
      relations: ['users'],
    });
  }
}
