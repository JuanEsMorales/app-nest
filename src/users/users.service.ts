import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/types';

@Injectable()
export class UsersService {
  private users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
    },
  ]
  getUsers(): User[] {
    return this.users;
  }

  getUsersWithLimit(limit: number): User[] {
    return this.users.slice(0, limit);
  }

  getUser(id: string): User {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  createUser(user: User): string {
    this.users.push(user);
    return user.name + ' registered';
  }

  updateUser(id: string, user: User): string {
    const index = this.users.findIndex(user => user.id === id)
    this.users[index] = user;
    return user.name + ' updated';
  }

  deleteUser(id: string): string {
    const index = this.users.findIndex(user => user.id === id);
    this.users.splice(index, 1)
    return 'User ' + id + ' deleted';
  }
}
