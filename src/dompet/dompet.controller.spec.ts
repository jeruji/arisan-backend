import { Test, TestingModule } from '@nestjs/testing';
import { DompetController } from './dompet.controller';

describe('Dompet Controller', () => {
  let controller: DompetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DompetController],
    }).compile();

    controller = module.get<DompetController>(DompetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
