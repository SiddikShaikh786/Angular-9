import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';


@NgModule({
  declarations: [ProductsComponent,
    AddProductsComponent,
    ViewProductsComponent,
    ListProductsComponent,
    UpdateProductsComponent,
    DeleteProductsComponent,
    ViewAllProductsByDateComponent,
    ViewAllProductsByCategoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
