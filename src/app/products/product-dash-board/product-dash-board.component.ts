import { Component, OnInit, inject } from '@angular/core';
import { Iproduct } from 'src/app/shared/models/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-dash-board',
  templateUrl: './product-dash-board.component.html',
  styleUrls: ['./product-dash-board.component.scss']
})
export class ProductDashBoardComponent implements OnInit {
  productsArr !: Array<Iproduct>;
  private _productService= inject(ProductsService)
  constructor() { }

  ngOnInit(): void {
    this.productsArr = this._productService.fetchAllProducts()
  }

}
