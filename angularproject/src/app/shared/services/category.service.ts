import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Category } from 'src/app/shopping/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private restURL = "http://localhost:3000/wscategories";
  constructor(private http:HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.restURL)
  }
}
