import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/repository/user/user.entity';
import { UserType } from 'src/repository/user/user.type';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserType)
        private userTypeRepository: Repository<UserType>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    getUserTypes() {
        return this.userTypeRepository.find({
            relations: ['users'],
        });
    }

    getAllUsers() {
        return this.userRepository.find({
            relations: ['userType'],
        })
    } 
}