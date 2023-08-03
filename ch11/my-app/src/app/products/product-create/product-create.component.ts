import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from '../product';
import { ProductsService } from '../products.service';
import { priceRangeValidator } from '../price-range.directive';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit, OnDestroy {

  @Output() added = new EventEmitter<Product>();

  productForm!: FormGroup<{
    name: FormControl<string>,
    price: FormControl<number | undefined>
  }>;

  showPriceRangeHint: boolean = false;

  private unsubscribe$: Subject<void> = new Subject<void>();

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
    this.price.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(price => {
      if (price) {
        this.showPriceRangeHint = price > 1 && price < 10000;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
        [Validators.required, priceRangeValidator()]
      )
    });
  }

}
