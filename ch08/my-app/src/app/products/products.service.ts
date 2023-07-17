import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

import { Product } from './product';


interface ProductDTO {
  title: string;
  price: number;
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly productsUrl = 'https://fakestoreapi.com/products';

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
      map(products => products.map(product => {
        return {
          name: product.title,
          price: product.price
        };
      }))
    );
  }

}
