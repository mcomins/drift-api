export interface Image {
  source: string;
  description: string;
}

export interface Ingredient {
  quantity?: number;
  unit?: string;
  name: string;
}

export interface Instructions {
  title?: string;
  steps: string[];
}

export interface Recipe {
  id: string;
  title: string;
  description?: string;
  image: Image;
  ingredients: Ingredient[];
  instructions: Instructions[];
}
