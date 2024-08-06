import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluation } from './entities/evaluation.entity';

/**
 *
 */
@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>,
  ) {}

  /**
   *
   * @param createEvaluationDto
   */
  create(createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationRepository.save(createEvaluationDto);
  }

  /**
   *
   */
  findAll() {
    return this.evaluationRepository.find({ relations: { course: true } });
  }

  /**
   *
   * @param id
   */
  findOne(id: number) {
    return this.evaluationRepository.findOne({ where: { id } });
  }

  /**
   *
   * @param id
   * @param updateEvaluationDto
   */
  update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    return this.evaluationRepository.update(id, updateEvaluationDto);
  }

  /**
   *
   * @param id
   */
  remove(id: number) {
    return this.evaluationRepository.delete(id);
  }
}
