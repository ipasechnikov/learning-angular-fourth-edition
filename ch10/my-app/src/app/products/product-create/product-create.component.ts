import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @Output() added = new EventEmitter<Product>();

  productForm!: FormGroup<{
    name: FormControl<string>,
    price: FormControl<number | undefined>
  }>;

  constructor(
    private readonly productService: ProductsService,
    private readonly formBuilder: FormBuilder
  ) { }

  get name() {
    return this.productForm.controls.name;
  }

  get price() {
    return this.productForm.controls.price;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  createProduct(): void {
    this.productService.addProduct(
      this.name.value, Number(this.price.value)
    ).subscribe(product => {
      this.productForm.reset();
      this.added.emit(product);
    })
  }

  private buildForm(): void {
    this.productForm = this.formBuilder.nonNullable.group({
      name: this.formBuilder.nonNullable.control(
        '', Validators.required
      ),
      price: this.formBuilder.nonNullable.control<number | undefined>(
        undefined,
        [Validators.required, Validators.min(1)]
      )
    });
  }

}
