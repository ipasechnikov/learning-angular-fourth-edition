import { Component, Input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService],
})
export class ProductViewComponent implements OnInit {

  name: string = '';

  @Input() id: number = -1;

  constructor(private readonly productViewService: ProductViewService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct(): void {
    this.productViewService.getProduct(this.id).subscribe(product => {
      this.name = product.name;
    });
  }

}
