import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluation } from './entities/evaluation.entity';

@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>,
  ) {}

  create(createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationRepository.save(createEvaluationDto);
  }

  findAll() {
    return this.evaluationRepository.find({ relations: { course: true } });
  }

  findOne(id: number) {
    return this.evaluationRepository.findOne({ where: { id } });
  }

  update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    return this.evaluationRepository.update(id, updateEvaluationDto);
  }

  remove(id: number) {
    return this.evaluationRepository.delete(id);
  }
}
