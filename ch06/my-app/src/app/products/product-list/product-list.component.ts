import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from 'src/app/products/product';
import { ProductsService } from '../products.service';
import { ProductViewService } from '../product-view/product-view.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService],
  viewProviders: [ProductViewService],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductDetailComponent) productDetail?: ProductDetailComponent;

  selectedProduct: Product | undefined;
  products: Product[] = [];

  constructor(private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  onBuy(): void {
    window.alert(`You just bought ${this.selectedProduct?.name}`);
  }

  trackByProducts(index: number, product: Product): string {
    return product.name;
  }
}
