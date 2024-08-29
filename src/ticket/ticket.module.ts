import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [TicketController],
  providers: [PrismaService],
})
export class TicketModule {}
