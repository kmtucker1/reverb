import { Component } from "@angular/core";
import { horizontal_card_list } from "../hotizontal-item-card/horizontal-card-list";
import { ProductItemModel } from "../recent-view-row/product-item.model";
import { ProductsService } from "../service/products.service";

@Component({
    selector: "fm-watch-list-layout",
    templateUrl: "watch-list-layout.component.html",
    styleUrls: ["watch-list-layout.component.css"]
})
export class WatchListLayoutComponent {
    products: ProductItemModel[] = [];

    constructor(private productsService:ProductsService) {
        
    }

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

function push(arg0: string) {
  throw new Error("Function not implemented.");
}

