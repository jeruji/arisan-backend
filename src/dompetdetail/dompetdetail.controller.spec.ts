import { Test, TestingModule } from '@nestjs/testing';
import { DompetdetailController } from './dompetdetail.controller';

describe('Dompetdetail Controller', () => {
  let controller: DompetdetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DompetdetailController],
    }).compile();

    controller = module.get<DompetdetailController>(DompetdetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
