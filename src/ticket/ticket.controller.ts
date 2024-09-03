import { Body, Controller, Get, Post } from '@nestjs/common';
import { Ticket, TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  buyTicketByUserId(@Body() ticket: Ticket) {
    console.log(ticket);
    return this.ticketService.buyTicketByUserId(ticket);
  }

  @Get()
  list() {
    return this.ticketService.listAllTickets();
  }
}
