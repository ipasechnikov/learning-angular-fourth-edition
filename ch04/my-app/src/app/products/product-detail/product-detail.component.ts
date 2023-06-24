import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }

  ngOnInit(): void {
    console.log(`Name is ${this.name} in ngOnInit`);
  }

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }

  buy(): void {
    this.bought.emit(this.name);
  }
}
