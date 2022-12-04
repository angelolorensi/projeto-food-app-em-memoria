import { FoodService } from '../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { Comida } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  comidas: Comida[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.comidas = this.foodService.getAll();
  }
}
