import { Test, TestingModule } from '@nestjs/testing';
import { ArisandetailController } from './arisandetail.controller';

describe('Arisandetail Controller', () => {
  let controller: ArisandetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArisandetailController],
    }).compile();

    controller = module.get<ArisandetailController>(ArisandetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
