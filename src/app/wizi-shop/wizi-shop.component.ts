import { Component, OnInit, Input } from '@angular/core';
import { Wizishop } from '../models/wizi-shop.model';

@Component({
  selector: 'app-wizi-shop',
  templateUrl: './wizi-shop.component.html',
  styleUrl: './wizi-shop.component.css',
})
export class WiziShopComponent implements OnInit {
  @Input() wiziShop!: Wizishop;
  imageUrl!: string;
  title!: string;
  price!: number;
  description!: string;
  createDate!: Date;

  ngOnInit() {
    this.imageUrl =
      'https://img.freepik.com/photos-gratuite/concept-ecran-vide-espace-copie-maquette_53876-124219.jpg?w=996&t=st=1709047727~exp=1709048327~hmac=ec6be555d8e01e597935c6b6178cae28cbe453a5abddfc88b544ff23a55f05ae';
    this.title = 'Ordinateur Portable';
    this.price = 900;
    this.description =
      'Processeur I5 10700k, Carte graphique Nvidia 3060, 8go de ram';
    this.createDate = new Date();
  }
  onAddToCart() {}
}
