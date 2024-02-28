import { Component, OnInit } from '@angular/core';
import { WiziShop } from '../models/wizi-shop.model';
import { WiziShopService } from '../services/wizi-shops.services';

@Component({
  selector: 'app-wizi-shop-list',
  templateUrl: './wizi-shop-list.component.html',
  styleUrl: './wizi-shop-list.component.css',
})
export class WiziShopListComponent implements OnInit {
  myCard!: WiziShop[];

  constructor(private wiziShopService: WiziShopService) {}

  ngOnInit() {
    this.myCard = this.wiziShopService.getAllWiziShop();
  }
}
