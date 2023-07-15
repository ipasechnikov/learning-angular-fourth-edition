import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ProductViewService } from '../product-view/product-view.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends ProductsService {

  constructor(private readonly productViewService: ProductViewService) {
    super();
  }

  override getProducts(): Observable<Product[]> {
    return super.getProducts().pipe(
      switchMap(products => {
        const productsSlice = products.slice(1,3);
        return of(productsSlice);
      })
    );
  }
}
