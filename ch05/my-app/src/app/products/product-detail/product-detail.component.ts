import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }

  ngOnInit(): void {
    console.log(`Name is ${this.name} in ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    if (product.isFirstChange()) {
      return;
    }

    const oldValue = product.previousValue;
    const newValue = product.currentValue;
    console.log(`Product changed from ${oldValue} to ${newValue}`);
  }

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }

  buy(): void {
    this.bought.emit(this.name);
  }
}
