import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Controller('ticket')
export class TicketController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getHello() {
    await this.prisma.event.create({
      data: { title: '', description: '', price: 10, category: '' },
    });

    return {
      message: 'Create',
    };
  }
}
