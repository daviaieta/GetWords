import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WordsService } from './words.service';
import { Word } from './entities/word.entity';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post('create')
  create(@Body() word: Word) {
    return this.wordsService.create(word);
  }

  @Get()
  findAll() {
    return this.wordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() word: Word) {
    return this.wordsService.update(+id, word);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wordsService.remove(+id);
  }

  @Get('random')
  randomWord() {
    return this.wordsService.getRandomWord();
  }
}
