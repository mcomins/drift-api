import { Injectable } from '@nestjs/common';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [];

  public getRecipes(): Recipe[] {
    return this.recipes;
  }
}
