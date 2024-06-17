import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class HelloController {

  @Get('/')
  getHello(@Req() req: Request, @Res() res: Response) {
    res.status(200).json({ message: 'Hello World!' });
  }
}
