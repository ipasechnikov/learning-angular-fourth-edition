import { ProductViewService } from "../product-view/product-view.service";
import { ProductsService } from "../products.service";
import { FavoritesService } from "./favorites.service";

export function favoritesFactory(isFavorite: boolean) {
  return (productViewService: ProductViewService) => {
    if (isFavorite) {
      return new FavoritesService(productViewService);
    } else {
      return new ProductsService();
    }
  };
}
