import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ListProductsComponent } from './list-products/list-products.component';

import { ProductsComponent } from './products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'delete-products', component: DeleteProductsComponent },
  { path: 'list-products', component: ListProductsComponent },
  { path: 'update-products', component: UpdateProductsComponent },
  { path: 'view-all-products-by-date', component: ViewAllProductsByDateComponent },
  { path: 'view-all-products-by-category', component: ViewAllProductsByCategoryComponent },
  { path: '**', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
