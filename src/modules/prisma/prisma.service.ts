import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    await this.$connect()
      .then(() => this.logger.log('Connected to the database'))
      .catch((err) => this.logger.error(err));
  }

  async onModuleDestroy() {
    await this.$disconnect()
      .then(() => this.logger.log('Disconnected from the database'))
      .catch((err) => this.logger.error(err));
  }
}
