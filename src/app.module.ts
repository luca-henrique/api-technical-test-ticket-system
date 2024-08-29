import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModule } from './ticket/ticket.module';
import { EventsModule } from './events/events.module';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ticket_system_db'),
    TicketModule,
    EventsModule,
    EventModule,
    UserModule,
  ],
  controllers: [EventController],
  providers: [],
  exports: [],
})
export class AppModule {}
