import { Injectable } from "@angular/core";
import { Product } from "../../shopping/models/product.models";

@Injectable()
export class ProductService{
    private productsData:Product[] = []

    constructor(){
        this.productsData = [
            new Product(1, 'one', 10, 'one for 10', 1),
            new Product(2, 'two', 20, 'two for 20', 2),
            new Product(3, 'three', 30, 'three for 30', 1),
            new Product(4, 'Bravia', 50000, 'Sony TV', 2),
            new Product(5, 'Galaxy S', 20000, 'Samsung Mobile', 2),
            new Product(6, 'iPhone X', 125000, 'Apple Phone', 1)
        ];
    }

    getProducts(): Product[] {
        return this.productsData
    }

}