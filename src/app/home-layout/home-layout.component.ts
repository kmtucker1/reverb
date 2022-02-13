import { Component } from "@angular/core";
import { mock_product_list } from "../recent-view-row/mock_product_list";
import { ProductItemModel } from "../recent-view-row/product-item.model";

@Component({
    selector: 'fm-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent {
    products: ProductItemModel[] = [];

  constructor() {
    for(var product of mock_product_list) {
      console.log(product);
      this.products.push(product);
    } 
  }
}