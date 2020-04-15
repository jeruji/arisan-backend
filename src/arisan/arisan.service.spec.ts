import { Test, TestingModule } from '@nestjs/testing';
import { ArisanService } from './arisan.service';

describe('ArisanService', () => {
  let service: ArisanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArisanService],
    }).compile();

    service = module.get<ArisanService>(ArisanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
