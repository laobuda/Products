import {Component} from '@angular/core';
import {Product} from './productIntf';
import { Headers, Http , Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable }    from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-list',
  templateUrl: './../products.html',
  styleUrls: ['./../products.css']
})
@Injectable()
export class ProductList  {
  
  private productsUrl = 'http://localhost:8080/products';
  selectedProduct : Product;

  constructor (private http: Http) {
  }
  
  //products: Observable<Product[]> = this.getProducts();

  products : Product[] = [{product_name: "TerminatorBalls", license : "Freeware", url : "https://play.google.com/store/apps/details?id=com.samman.TerminatorBalls"},
                          {product_name: "TerminatorBallsPro", license : "Commercial", url : "https://play.google.com/store/apps/details?id=com.samman.CrazyBalls"}];

  getProducts (): Product[] {
    return this.products;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

    public getPaid(prodFree : string) : string{
     return prodFree.valueOf() == "true" ? "Freeware" : "Commercial";
     
  }
  
  onSelect(product : Product) : void {
    this.selectedProduct = product;
  }
}