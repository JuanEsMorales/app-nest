import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/types';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  
  @Get()
  getUsersWithLimit(@Query('limit') limit: any) {    
    return this.usersService.getUsersWithLimit(limit);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: User) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
