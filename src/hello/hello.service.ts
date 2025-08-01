// eslint-disable-next-line prettier/prettier
import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  gethello(): string {
    return 'Hello Nest js';
  }
  gethellowithname(name) {
    return `Hello ${name}`;
  }
  gethellowithquery(name) {
    return `hello query ${name}`;
  }
}
