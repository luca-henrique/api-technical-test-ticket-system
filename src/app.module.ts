import { Module } from '@nestjs/common';
import { TicketModule } from './ticket/ticket.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';

@Module({
  imports: [TicketModule, PrismaModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
