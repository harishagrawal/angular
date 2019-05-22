import { Component, OnInit } from '@angular/core';
import { Category } from '../../../shopping/models/category.model';
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categories:Category[] = [];
  constructor(private ctgsvc:CategoryService) { }

  ngOnInit() {
  }

}
