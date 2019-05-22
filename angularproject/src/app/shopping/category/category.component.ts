import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import {CategoryService} from "../../shared/services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categories:Category[] = [];
  // @Input
  frmCtg = new Category(null, null);

  constructor(private ctgsvc:CategoryService) { }

  ngOnInit() {
    this.ctgsvc.getCategories().subscribe(
      (data) => {
        this.categories = data
      }, (err) => {
        console.log("Error: ", err)
      }
    )
  }

  save(){
    if (this.frmCtg.id == undefined) {
      this.ctgsvc.addCategory(this.frmCtg).subscribe(
        (data) => {
          console.log("Saved successfully")
          this.categories.push(data)
          this.frmCtg = new Category(null, null)
        },
        (err)=>{
          console.log("Error: ", err)
        }
      )
    } else {
      this.ctgsvc.updateCategory(this.frmCtg).subscribe(
        (data) => {
          console.log("Update success")
          let idx = this.categories.findIndex((e) => e.id == data.id)
          this.categories[idx] = data;
        }, (err) => {
          console.log("Update error: ", err)
        }
      )

    }
  }

  delete(id:number){
    this.ctgsvc.deleteCategory(id).subscribe(
      (data) => {
        console.log("Delete success")
        let idx = this.categories.findIndex((e) => e.id == id)
        this.categories.splice(idx, 1)
      },
      (err) => {
        console.log('Delete error: ', err)
      }
    )
  }

  edit(selectedCtg:Category){
    // this.frmCtg.id = selectedCtg.id
    // this.frmCtg.name = selectedCtg.name
    Object.assign(this.frmCtg, selectedCtg)
  }
  
}
