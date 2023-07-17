import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService],
})
export class ProductViewComponent implements OnInit, OnDestroy {

  name: string = '';

  @Input() id: number = -1;

  private productSub = new Subject<void>();

  constructor(private readonly productViewService: ProductViewService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }

  private getProduct(): void {
    this.productViewService.getProduct(this.id).pipe(
      takeUntil(this.productSub)
    ).subscribe(product => {
      this.name = product.name;
    });
  }

}
