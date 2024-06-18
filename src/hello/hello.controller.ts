import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {

  @Get('/')
  getHello(@Req() req: Request, @Res() res: Response) {
    res.status(200).json({ message: 'Hello World!' });
  }

  @Get('/notfound')
  @HttpCode(404)
  getHelloByName() {
    return '404 Not Found';
  }

  @Get('ticket/:id')
  getTicket(@Param('id', ParseIntPipe) id: number) {
    return 11 + id;
  }

  @Get('active/:status')
  getActiveTickets(@Param('status', ParseBoolPipe) status: boolean) {    
    return status === true ? 'Active tickets' : 'Inactive tickets';
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
    console.log({age: typeof query.age, name: typeof query.name});
    
    return `Hello ${query.name}! You are ${query.age} years old.`;
  }
}
