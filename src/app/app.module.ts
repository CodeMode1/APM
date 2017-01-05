import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; //load features of reactive extensions like map operator


import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './shared';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { routing } from './app.routes';


@NgModule({
declarations: [AppComponent, HomeComponent, ProductListComponent, StarComponent, ProductFilterPipe, ProductDetailComponent],
imports: [BrowserModule, FormsModule, routing],
providers: [HTTP_PROVIDERS, ProductService],
bootstrap: [AppComponent]
})
export class AppModule {}

