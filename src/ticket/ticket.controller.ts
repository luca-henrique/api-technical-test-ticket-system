import { Body, Controller, Post } from '@nestjs/common';
import { Ticket, TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  buyTicketByUserId(@Body() ticket: Ticket) {
    console.log(ticket);
    return this.ticketService.buyTicketByUserId(ticket);
  }
}
