import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Lasanha',
      'A simple recipe',
      'https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-master768-v2.jpg?w=1024&q=75'
    ),
    new Recipe(
      'Churrasco',
      'A simple recipe',
      'https://st.depositphotos.com/1672917/3755/i/950/depositphotos_37554817-stock-photo-picanha-traditional-brazilian-barbecue.jpg'
    ),
  ];
}
