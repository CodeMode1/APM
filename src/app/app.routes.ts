import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail.component';

const APP_ROUTES=[
    { path: '', component: HomeComponent},
    { path: 'products', component: ProductListComponent},
    { path: 'product/:id', component: ProductDetailComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);