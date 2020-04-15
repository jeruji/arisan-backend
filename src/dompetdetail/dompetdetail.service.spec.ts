import { Test, TestingModule } from '@nestjs/testing';
import { DompetdetailService } from './dompetdetail.service';

describe('DompetdetailService', () => {
  let service: DompetdetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DompetdetailService],
    }).compile();

    service = module.get<DompetdetailService>(DompetdetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
