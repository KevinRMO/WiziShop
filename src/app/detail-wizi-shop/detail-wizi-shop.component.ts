import { Component, OnInit, Input } from '@angular/core';
import { WiziShop } from '../models/wizi-shop.model';
import { WiziShopService } from '../services/wizi-shops.services';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from '../services/panier.services'; // Importez le service PanierService

@Component({
  selector: 'app-detail-wizi-shop',
  templateUrl: './detail-wizi-shop.component.html',
  styleUrls: ['./detail-wizi-shop.component.css'],
})
export class DetailWiziShopComponent implements OnInit {
  @Input() wiziShop!: WiziShop;

  constructor(
    private wiziShopsService: WiziShopService,
    private route: ActivatedRoute,
    private router: Router,
    private panierService: PanierService // Injectez le service PanierService
  ) {}

  ngOnInit() {
    const cardId = +this.route.snapshot.params['id'];
    this.wiziShop = this.wiziShopsService.getWiziShopById(cardId);
  }

  onViewReturn() {
    this.router.navigateByUrl('');
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
