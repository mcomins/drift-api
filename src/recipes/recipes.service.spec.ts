import { Test, TestingModule } from '@nestjs/testing';
import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  let recipesService: RecipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipesService],
    }).compile();

    recipesService = module.get<RecipesService>(RecipesService);
  });

  it('should be defined', () => {
    expect(recipesService).toBeDefined();
  });

  it('should return recipes', () => {
    expect(recipesService.getRecipes()).toEqual([]);
  });
});
