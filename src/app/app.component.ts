import { Component } from '@angular/core';
import { mock_product_list } from './recent-view-row/mock_product_list';
import { ProductItemModel } from './recent-view-row/product-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reverb';
  
}
