import { Test, TestingModule } from '@nestjs/testing';
import { ArisandetailService } from './arisandetail.service';

describe('ArisandetailService', () => {
  let service: ArisandetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArisandetailService],
    }).compile();

    service = module.get<ArisandetailService>(ArisandetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
