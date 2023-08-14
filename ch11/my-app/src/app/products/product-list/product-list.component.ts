import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Product } from 'src/app/products/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: MatTableDataSource<Product> = new MatTableDataSource<Product>([]);
  columnNames: string[] = ['name', 'price'];

  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

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
      this.products.paginator = this.paginator;
    });
  }

}
