import { Module } from '@nestjs/common';
import { TicketModule } from './ticket/ticket.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TicketModule, PrismaModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
