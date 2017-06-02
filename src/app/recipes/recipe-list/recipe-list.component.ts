import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFd9173PjidA_S2rR1CZMGjoXshXbj4TJp56BtSnzm97M4Njh'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFd9173PjidA_S2rR1CZMGjoXshXbj4TJp56BtSnzm97M4Njh')
  ];

  constructor() { }

  ngOnInit() {
  }

}