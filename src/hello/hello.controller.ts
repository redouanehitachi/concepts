import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  @Get()
  // eslint-disable-next-line prettier/prettier
  getHello(): string {
    return this.helloService.gethello();
  }
  @Get('user/:name')
  gethellowithname(@Param('name') name: string) {
    return this.helloService.gethellowithname(name);
  }
  @Get('query')
  gethellowithquery(@Query('name')name:string){
    return this.helloService.gethellowithquery(name)

  }
}
