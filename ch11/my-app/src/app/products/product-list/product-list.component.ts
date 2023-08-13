import { Component, OnInit, ViewChild } from '@angular/core';

import { Product } from 'src/app/products/product';
import { ProductsService } from '../products.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: MatTableDataSource<Product> = new MatTableDataSource<Product>([]);
  columnNames: string[] = ['name', 'price'];

  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onAdd(product: Product): void {
    this.products?.data.push(product);
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = new MatTableDataSource(products);
      this.products.sort = this.sort;
    });
  }

}
