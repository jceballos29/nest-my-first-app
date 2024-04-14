import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): object {
    return {
      name: 'NestJS',
      version: '7.0.0',
      description:
        'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    };
  }
}
