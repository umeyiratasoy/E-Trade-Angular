import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardModule } from './admin/components/dashboard/dashboard.module';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
{path:"admin",component:LayoutComponent, children: [
  {path:"dashboard", loadChildren:()=>import("./admin/components/dashboard/dashboard.module").then 
  (module => module.DashboardModule)},
  {path:"customer", loadChildren:()=>import("./admin/components/customer/customer.module").then 
  (module => module.CustomerModule)},
  {path:"products", loadChildren:()=>import("./admin/components/products/products.module").then 
  (module => module.ProductsModule)},
  {path:"order", loadChildren:()=>import("./admin/components/order/order.module").then 
  (module => module.OrderModule)},

]},

{path:"",component: HomeComponent},
{path:"baskets", loadChildren:()=>import("./ui/components/baskets/baskets.module").then 
(module => module.BasketsModule)},
{path:"products", loadChildren:()=>import("./admin/components/products/products.module").then 
(module => module.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
