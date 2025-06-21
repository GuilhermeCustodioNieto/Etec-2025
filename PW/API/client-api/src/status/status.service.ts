import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Status } from './entities/status.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status) private readonly repository: Repository<Status>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const status = await this.repository.findOne({
      where: { id },
    });

    if (!status) {
      throw new Error(`Status with id ${id} not found`);
    }

    return status;
  }
}
