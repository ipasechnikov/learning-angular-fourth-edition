import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct = '';

  onBuy(): void {
    window.alert(`You just bought ${this.selectedProduct}`);
  }
}
