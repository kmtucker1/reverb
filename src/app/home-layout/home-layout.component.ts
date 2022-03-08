import { Component, OnInit } from "@angular/core";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { mock_product_list } from "../recent-view-row/mock_product_list";
import { ProductItemModel } from "../recent-view-row/product-item.model";
import { ProductsService } from "../service/products.service";

@Component({
    selector: 'fm-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
    products: ProductItemModel[] = [];

  constructor(private productsService:ProductsService) {
  
  }

  //iterating data from backend
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      console.log(data);
      for(var product of data) {
        console.log(product);
        this.products.push(product);
      }
    })
  }
}