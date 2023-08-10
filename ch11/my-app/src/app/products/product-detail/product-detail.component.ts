import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable, filter, of, switchMap } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';
import { Product } from 'src/app/products/product';
import { ProductsService } from '../products.service';
import { CartService } from 'src/app/cart/cart.service';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() id = -1;
  @Output() deleted = new EventEmitter();

  price: number | undefined;

  product$: Observable<Product> | undefined;

  constructor(
    private readonly productService: ProductsService,
    public readonly authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly cartService: CartService,
    private readonly dialog: MatDialog
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

  buy(product: Product): void {
    this.cartService.addProduct(product)
  }

  changePrice(product: Product): void {
    this.dialog.open(PriceComponent, {
      data: product.price
    }).afterClosed().pipe(
      filter(price => !!price),
      switchMap(price => this.productService.updateProduct(product.id, price))
    ).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  remove(product: Product): void {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }

}
