import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../recent-view-row/product-item.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
  }

  addProduct(product: ProductItemModel) {
    console.log(product);
    this.ps.addProduct(product);

  }

}
