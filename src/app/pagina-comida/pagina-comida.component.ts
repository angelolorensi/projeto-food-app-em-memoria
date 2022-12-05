import { FoodService } from './../services/food/food.service';
import { ActivatedRoute } from '@angular/router';
import { Comida } from './../shared/models/Comida';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-comida',
  templateUrl: './pagina-comida.component.html',
  styleUrls: ['./pagina-comida.component.css']
})
export class PaginaComidaComponent implements OnInit {

  comida!: Comida;
  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id){
        this.comida = foodService.buscarComidaPorId(params.id);
      }
    })
  }

  ngOnInit(): void {
  }

}
