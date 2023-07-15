import { Component, Host, OnInit, Optional } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { favoritesFactory } from './favorites';
import { ProductViewService } from '../product-view/product-view.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [
    {
      provide: ProductsService,
      useFactory: favoritesFactory(true),
      deps: [ProductViewService]
    }
  ]
})
export class FavoritesComponent implements OnInit {

  products: Product[] = [];

  constructor(@Host() @Optional() private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    })
  }

}
