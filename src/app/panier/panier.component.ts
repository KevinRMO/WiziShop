// panier.component.ts
import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.services';
import { WiziShop } from '../models/wizi-shop.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  panierItems: WiziShop[] = [];
  prixTotal: number = 0;

  constructor(private panierService: PanierService, private router: Router) {}

  ngOnInit() {
    this.panierItems = this.panierService.panierItems;
    this.calculerPrixTotal();
  }

  onViewDetailPanier(id: number) {
    this.router.navigateByUrl(`detail/${id.toString()}`);
  }

  retirerDuPanier(index: number) {
    this.panierService.retirerDuPanier(index);
    this.calculerPrixTotal();
  }

  calculerPrixTotal() {
    this.prixTotal = this.panierService.calculerPrixTotal();
  }

  updateTotalPrice() {
    // Recalculer le prix total en tenant compte de la quantité sélectionnée pour chaque élément du panier
    this.prixTotal = 0; // Réinitialiser le prix total
    this.panierItems.forEach((item) => {
      if (item.quantity !== undefined && item.quantity !== null) {
        this.prixTotal += item.price * item.quantity; // Multiplier le prix par la quantité pour chaque élément
      }
    });
  }
}
