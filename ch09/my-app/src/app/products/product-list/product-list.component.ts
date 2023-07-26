import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/products/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onAdd(product: Product): void {
    this.products.push(product);
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

}
