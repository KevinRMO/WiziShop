import { Injectable } from '@angular/core';
import { WiziShop } from '../models/wizi-shop.model';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  panierItems: WiziShop[] = [];

  ajouterAuPanier(item: WiziShop) {
    this.panierItems.push(item);
  }

  retirerDuPanier(index: number) {
    this.panierItems.splice(index, 1);
  }

  calculerPrixTotal(): number {
    let total = 0;
    this.panierItems.forEach((item) => {
      total += item.price;
    });
    return total;
  }
}
