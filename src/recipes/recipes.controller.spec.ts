import { Test, TestingModule } from '@nestjs/testing';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { getRecipesResponse } from './mock/getRecipesResponse';

describe('RecipesController', () => {
  let controller: RecipesController;
  let recipesService: RecipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipesController],
      providers: [RecipesService],
    }).compile();

    controller = module.get<RecipesController>(RecipesController);
    recipesService = module.get<RecipesService>(RecipesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getRecipes', () => {
    it('should return recipes', () => {
      recipesService.getRecipes = jest.fn().mockReturnValue(getRecipesResponse);

      const response = controller.getRecipes();
      expect(response).toEqual(getRecipesResponse);
    });
  });
});
