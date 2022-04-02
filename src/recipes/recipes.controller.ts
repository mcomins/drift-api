import { Controller, Get } from '@nestjs/common';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  getRecipes(): Recipe[] {
    return this.recipesService.getRecipes();
  }
}
