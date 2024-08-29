import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModule } from './ticket/ticket.module';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './database/prisma.service';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ticket_system_db'),
    TicketModule,
    EventModule,
    UserModule,
  ],
  controllers: [EventController],
  providers: [PrismaService],
  exports: [],
})
export class AppModule {}
