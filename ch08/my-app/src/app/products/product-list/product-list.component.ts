import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from 'src/app/products/product';
import { ProductsService } from '../products.service';
import { ProductViewService } from '../product-view/product-view.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product | undefined;
  products: Product[] = [];

  constructor(private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onBuy(): void {
    window.alert(`You just bought ${this.selectedProduct?.name}`);
  }

  onAdd(product: Product): void {
    this.products.push(product);
  }

  onDelete(): void {
    this.products = this.products.filter(product => product !== this.selectedProduct);
    this.selectedProduct = undefined;
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

}
