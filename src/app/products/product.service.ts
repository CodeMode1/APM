import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: Http){}

  // get une liste de produits.
  getProducts(): Observable<IProduct[]>{
    return this.http.get(this.productUrl).map((response: Response) => <IProduct[]>response.json())
                                          .do(data => console.log('All: ' + JSON.stringify(data)))
                                          .catch(this.handleError);
  }

  // get un produit par id.
  getProduct(id: number): Observable<IProduct>{
    return this.http.get(this.productUrl).map((response: Response) => 
    <IProduct>response.json().find(response => response.productId === id));
                                          
  }
    /* INSTEAD RETRIEVE DATA FROM A LOCAL JSON FILE 
      TECHNIQUE IS THE SAME TO RETRIEVE DATA FROM A BACK END SERVICE
    [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 1.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 3.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
    ];
    */


  private handleError(error: Response){
    console.log(error);
    return Observable.throw(error.json().error || 'erreur serveur');
  }
}
