import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: "",component: HomeComponent},
  {path:"products", component: ProductListComponent},
  {path:"update/:id", component: UpdateComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
