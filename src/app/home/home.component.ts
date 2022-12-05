import { FoodService } from '../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { Comida } from '../shared/models/Comida';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  comidas: Comida[] = [];

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.buscador) {
        this.comidas = this.foodService.buscarComidaPeloBuscador(params.buscador);
      } else if (params.tag) {
        this.comidas = this.foodService.buscarComidaPelaTag(params.tag);
      } else {
        this.comidas = this.foodService.buscarTodos();
      }
    });
  }
}
