import { Controller, Get, Param } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './services/users/users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly UsersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.UsersService.getUsers()
  }

  @Get(':id')
  async getUserById(@Param() params): Promise<User> {
    return this.UsersService.getUserById(params.id)
  }
}
