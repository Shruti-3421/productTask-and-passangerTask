import { Component, Input, OnInit, inject } from '@angular/core';
import { Iproduct, ProductsStatus } from 'src/app/shared/models/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() getproduct !: Iproduct;
  allProductStatus = ProductsStatus;
  private _productsService= inject(ProductsService)
  constructor() { }

  ngOnInit(): void {
  }
  onChangeStatus(val:ProductsStatus){
    // this.getproduct.pstatus=val;/
    this._productsService.updatedPost(this.getproduct.id, val)
  }
}
