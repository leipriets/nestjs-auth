import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResetEntity } from './reset.entity';
import { ResetInterface } from './reset.interface';

@Injectable()
export class ResetService {
    constructor(
        @InjectRepository(ResetEntity) private readonly resetRepository: Repository<ResetEntity>
    ) {

    }

    async create(reset: ResetInterface): Promise<ResetInterface>  {
        return await this.resetRepository.save(reset);
    }

    async findOne(condition): Promise<ResetInterface> {
        return await this.resetRepository.findOneBy(condition);
    }
}
