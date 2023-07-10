import { Component, Host, OnInit, Optional } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [
    { provide: ProductsService, useClass: FavoritesService }
  ]
})
export class FavoritesComponent implements OnInit {

  products: Product[] = [];

  constructor(@Host() @Optional() private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
