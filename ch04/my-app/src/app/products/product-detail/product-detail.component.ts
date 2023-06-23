import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductDetailComponent {
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  buy(): void {
    this.bought.emit(this.name);
  }
}
