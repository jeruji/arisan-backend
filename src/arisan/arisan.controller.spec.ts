import { Test, TestingModule } from '@nestjs/testing';
import { ArisanController } from './arisan.controller';

describe('Arisan Controller', () => {
  let controller: ArisanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArisanController],
    }).compile();

    controller = module.get<ArisanController>(ArisanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
