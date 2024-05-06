import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProductsModule } from './products/products.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PassangersModule } from './passangers/passangers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductsModule,
    ReactiveFormsModule,
    PassangersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
