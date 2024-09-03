import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export type Ticket = {
  id: number;
  user_id: number;
  event_id: number;
  count: number;
};

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

  async buyTicketByUserId(ticket: Ticket) {
    return this.prisma.prismaClient.ticket.create({ data: ticket });
  }

  async listAllTickets() {
    return this.prisma.prismaClient.ticket.findMany();
  }
}
