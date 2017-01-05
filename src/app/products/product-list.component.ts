import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
//import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'pm-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
  //pipes: [ProductFilterPipe]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  products: IProduct[] = [];
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filtreList: string = '';
  ratingClicked: string;
  errorMessage: string;

  constructor(private productService: ProductService) {
      
   }
 
  ngOnInit() {
    console.log('on init');
    this.productService.getProducts().subscribe(
      data => this.products = data,
      error => this.errorMessage = <any>error);
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  onNotify(message: string): void{
    this.ratingClicked = message;
  }

}
