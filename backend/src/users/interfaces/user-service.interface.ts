import { User } from './user.interface';

export interface IUserService {
  getUsers(): Promise<User[]>

  getUserById(id: number): Promise<User>
}
