import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  @Output() added = new EventEmitter<Product>();

  productForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    price: new FormControl<number | undefined>(undefined, { nonNullable: true })
  });

  constructor(private readonly productService: ProductsService) { }

  get name() {
    return this.productForm.controls.name;
  }

  get price() {
    return this.productForm.controls.price;
  }

  createProduct(): void {
    this.productService.addProduct(
      this.name.value, Number(this.price.value)
    ).subscribe(product => {
      this.productForm.reset();
      this.added.emit(product);
    })
  }

}
