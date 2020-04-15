import { Test, TestingModule } from '@nestjs/testing';
import { DompetService } from './dompet.service';

describe('DompetService', () => {
  let service: DompetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DompetService],
    }).compile();

    service = module.get<DompetService>(DompetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
