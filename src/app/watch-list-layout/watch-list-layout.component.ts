import { Component } from "@angular/core";
import { horizontal_card_list } from "../hotizontal-item-card/horizontal-card-list";
import { ProductItemModel } from "../recent-view-row/product-item.model";

@Component({
    selector: "fm-watch-list-layout",
    templateUrl: "watch-list-layout.component.html",
    styleUrls: ["watch-list-layout.component.css"]
})
export class WatchListLayoutComponent {
    products: ProductItemModel[] = [];

    constructor() {
        for (var product of horizontal_card_list) {
            console.log(product);
            this.products.push(product);
        }
    }
}