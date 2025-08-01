import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
  constructor(private readonly helloservice: HelloService) {}
  getAllUsers() {
    return [
      { id: 1, name: 'red' },
      { id: 2, name: 'redbob' },
      { id: 3, name: 'redouane' },
    ];
  }
  getUserbyId(id: number) {
    const user = this.getAllUsers().find((user) => user.id === id);
    return user;
  }
  getWelcomeMessage(userId: number) {
    const user = this.getUserbyId(userId);
    if (!user) {
      return 'user not found';
    }
    return this.helloservice.gethellowithname(user?.name);
  }
}
