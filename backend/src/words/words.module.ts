import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [WordsController],
  providers: [WordsService, PrismaService],
})
export class WordsModule {}
