import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/products/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnChanges {
  @Input() id = -1;
  @Output() bought = new EventEmitter<void>();

  product$: Observable<Product> | undefined;

  constructor(private readonly productService: ProductsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.product$ = this.productService.getProduct(this.id);
  }

  buy(): void {
    this.bought.emit();
  }

  changePrice(product: Product, price: number): void {
    this.productService.updateProduct(product.id, price).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

}
