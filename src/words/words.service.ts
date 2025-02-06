import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { Word } from './entities/word.entity';
@Injectable()
export class WordsService {
  constructor(private prismaService: PrismaService) {}

  async create(word: Word) {
    const createdWord = await this.prismaService.word.create({
      data: {
        text: word.text,
      },
    });
    return createdWord;
  }

  async findAll() {
    const words = await this.prismaService.word.findMany();
    return words;
  }

  async findOne(id: number) {
    const word = await this.prismaService.word.findUnique({
      where: { id },
    });
    return word;
  }

  async update(id: number, word: Word) {
    const updatedWord = await this.prismaService.word.update({
      where: { id },
      data: {
        text: word.text,
      },
    });
    return updatedWord;
  }

  async remove(id: number) {
    const deletedWord = await this.prismaService.word.delete({
      where: { id },
    });
    return deletedWord;
  }

  async getRandomWord() {
    const words = await this.prismaService.word.findMany();
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
}
