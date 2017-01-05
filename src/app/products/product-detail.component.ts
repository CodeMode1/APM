import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
  pageTitle: string = 'Détails Produit';
  id: number;
  product: IProduct;
  private sub: any;
  errorMessage: string;
  rating: string;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService){
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {this.id = +params['id']
                                                      this.getProduct(this.id)});
    console.log(this.id);
    this.pageTitle += ` : #${this.id}`;
  }

  getProduct(id: number){
    this.productService.getProduct(id).subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void{
    this.rating = message;
  }

}
