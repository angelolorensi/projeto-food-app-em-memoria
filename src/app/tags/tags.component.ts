import { FoodService } from './../services/food/food.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  tagPaginaComida?: string[];

  tags?: Tag[];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if(!this.tagPaginaComida){
    this.tags = this.foodService.buscarTodasTags();
    }
  }
}
