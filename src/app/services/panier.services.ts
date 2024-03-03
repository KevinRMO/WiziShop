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
      // Vérifie si la propriété quantity est définie
      if (item.quantity !== undefined) {
        // Utilise la quantité si elle est définie
        total += item.price * item.quantity;
      } else {
        // Sinon, utilise une quantité par défaut (par exemple, 1)
        total += item.price;
      }
    });
    return total;
  }
}
