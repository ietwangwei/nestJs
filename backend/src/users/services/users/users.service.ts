import { Injectable } from '@nestjs/common';
import { IUserService } from 'src/users/interfaces/user-service.interface';
import { User } from '../../interfaces/user.interface';

@Injectable()
export class UsersService implements IUserService {
  async getUsers(): Promise<User[]> {
    return [
      {
        name: 'viv',
        id: 0,
        age: 12
      }
    ]
  }

  async getUserById(id): Promise<User> {
    return {
      name: 'viv',
      id: 0,
      age: 12
    }
  }
}

