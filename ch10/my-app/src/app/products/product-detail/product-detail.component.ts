import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';
import { Product } from 'src/app/products/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() id = -1;
  @Output() bought = new EventEmitter();
  @Output() deleted = new EventEmitter();

  product$: Observable<Product> | undefined;

  constructor(
    private readonly productService: ProductsService,
    public readonly authService: AuthService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.product$ = this.route.data.pipe(
      switchMap(data => of(data['product']))
    );
  }

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

  remove(product: Product): void {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }

}
