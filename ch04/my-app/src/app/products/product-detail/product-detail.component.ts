import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }

  buy(): void {
    this.bought.emit(this.name);
  }
}
