
import { Injectable } from "@angular/core";
import { ProductItemModel } from "../recent-view-row/product-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
   
constructor(private db: AngularFireDatabase) {

}

    public getProducts() {
        return this.db.list<ProductItemModel>("products").valueChanges();
    }

    public addProduct(product: ProductItemModel) {
        this.db.list<ProductItemModel>("products").push(product)
    }
}