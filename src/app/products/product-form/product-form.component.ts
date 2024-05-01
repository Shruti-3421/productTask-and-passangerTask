import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsStatus } from 'src/app/shared/models/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productsForm !: FormGroup;
  private _uuid= inject(UuidService);
  private _productsService = inject(ProductsService)
  constructor() { }

  ngOnInit(): void {
    this.productsForm = new FormGroup({
      pname: new FormControl(null, [Validators.required]),
      pdetails: new FormControl(null, [Validators.required])
    })
  }
  
   onProdAdd(){
      if(this.productsForm.valid){
        let obj= {...this.productsForm.value,
          id: this._uuid.uuid(),
          pstatus: ProductsStatus.Inprogress
        };
        console.log(obj);
        this._productsService.addNewProd(obj);
        this.productsForm.reset();
      }
   }
}
