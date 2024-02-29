// panier.component.ts
import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.services';
import { WiziShop } from '../models/wizi-shop.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  panierItems: WiziShop[] = [];
  prixTotal: number = 0;

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    this.panierItems = this.panierService.panierItems;
    this.calculerPrixTotal();
  }

  retirerDuPanier(index: number) {
    this.panierService.retirerDuPanier(index);
    this.calculerPrixTotal();
  }

  calculerPrixTotal() {
    this.prixTotal = this.panierService.calculerPrixTotal();
  }
}
