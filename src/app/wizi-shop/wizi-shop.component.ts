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
    this.panierService.ajouterAuPanier(this.wiziShop);
  }
}
