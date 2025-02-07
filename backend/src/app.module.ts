import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordsModule } from './words/words.module';
import { PrismaService } from './db/prisma.service';

@Module({
  imports: [WordsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
