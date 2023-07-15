import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name: 'Microphone',
      price: 200
    },
    {
      name: 'Wireless keyboard',
      price: 85
    },
    {
      name: 'Mouse',
      price: 50
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

}
