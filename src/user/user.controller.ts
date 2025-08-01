import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUser() {
    return this.userService.getAllUsers();
  }
  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserbyId(id);
  }
  @Get(':id/welcome')
  getWelcomeMessage(@Param('id', ParseIntPipe) id: number) {
    // Implement your logic here, for example:
    return this.userService.getWelcomeMessage(id);
  }
}
