import { Component, OnInit, Input } from '@angular/core';
import { WiziShop } from '../models/wizi-shop.model';
import { WiziShopService } from '../services/wizi-shops.services';
import { Router } from '@angular/router';
import { PanierService } from '../services/panier.services';

@Component({
  selector: 'app-wizi-shop',
  templateUrl: './wizi-shop.component.html',
  styleUrl: './wizi-shop.component.css',
})
export class WiziShopComponent implements OnInit {
  @Input() wiziShop!: WiziShop;

  constructor(
    private wiziShopService: WiziShopService,
    private panierService: PanierService,
    private router: Router
  ) {}

  ngOnInit() {}

  onViewDetail() {
    this.router.navigateByUrl(`detail/${this.wiziShop.id}`);
  }

  ajouterAuPanier() {
    // Vérifier si l'article est déjà présent dans le panier
    const articleExistant = this.panierService.panierItems.find(
      (item) => item.id === this.wiziShop.id
    );

    if (articleExistant) {
      // Si l'article est déjà présent, augmenter sa quantité si la propriété quantity existe
      articleExistant.quantity = (articleExistant.quantity ?? 0) + 1;
    } else {
      // Sinon, ajouter l'article avec une quantité de 1
      this.wiziShop.quantity = 1;
      this.panierService.ajouterAuPanier(this.wiziShop);
    }
  }
}
