import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [];
    findAll(){
        this.users = [{
            id: 1,
            username: 'ramiro',
            password: 'ramiro',
            tasks: ['cook', 'study'],
        }]
        return this.users;
    }
    findOne(id: string) {
        const user = this.users.find(u => u.id === +id)
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`)
        }
    }
    create(createUserDto: CreateUserDto) {
        return createUserDto;
    }
    update(id: string, updateUserDto: UpdateUserDto) {
        return 'Updated!';
    }        
}
