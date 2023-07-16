import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from 'src/app/products/product';
import { ProductsService } from '../products.service';
import { ProductViewService } from '../product-view/product-view.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService],
  viewProviders: [ProductViewService],
})
export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ProductDetailComponent) productDetail?: ProductDetailComponent;

  selectedProduct: Product | undefined;
  products: Product[] = [];

  private productsSub: Subscription | undefined;

  constructor(private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }

  onBuy(): void {
    window.alert(`You just bought ${this.selectedProduct?.name}`);
  }

  trackByProducts(index: number, product: Product): string {
    return product.name;
  }

  private getProducts(): void {
    this.productsSub = this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

}
