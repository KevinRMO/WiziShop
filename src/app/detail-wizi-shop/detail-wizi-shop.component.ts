import { Component, OnInit, Input } from '@angular/core';
import { WiziShop } from '../models/wizi-shop.model';
import { WiziShopService } from '../services/wizi-shops.services';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-wizi-shop',
  templateUrl: './detail-wizi-shop.component.html',
  styleUrl: './detail-wizi-shop.component.css',
})
export class DetailWiziShopComponent implements OnInit {
  @Input() wiziShop!: WiziShop;

  constructor(
    private wiziShopsService: WiziShopService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const cardId = +this.route.snapshot.params['id'];
    this.wiziShop = this.wiziShopsService.getWiziShopById(cardId);
  }

  onViewReturn() {
    this.router.navigateByUrl('');
  }
}
