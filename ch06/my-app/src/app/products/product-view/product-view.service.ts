import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Injectable()
export class ProductViewService {

  private product?: Product;

  constructor(private readonly productService: ProductsService) { }

  getProduct(id: number): Product {
    const products = this.productService.getProducts();
    if (!this.product) {
      this.product = products[id];
    }
    return this.product;
  }

}
