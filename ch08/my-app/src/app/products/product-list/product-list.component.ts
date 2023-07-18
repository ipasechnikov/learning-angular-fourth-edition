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
  products$: Observable<Product[]> | undefined;

  constructor(private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onBuy(): void {
    window.alert(`You just bought ${this.selectedProduct?.name}`);
  }

  private getProducts(): void {
    this.products$ = this.productService.getProducts();
  }

}
