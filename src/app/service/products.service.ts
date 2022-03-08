import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "../recent-view-row/product-item.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private baseUrl: string = "https://reverb-d1446-default-rtdb.firebaseio.com/";
    private productsEndpoint: string = "products.json";
    private myinfoEndpoint: string = "myinfo";

constructor(private http:HttpClient) {

}

public getProducts() {
    return this.http.get<ProductItemModel[]>(this.baseUrl + this.productsEndpoint);
}

}