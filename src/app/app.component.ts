import { Component, OnInit } from '@angular/core';
import { Wizishop } from './models/wizi-shop.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  myCard!: Wizishop[];

  ngOnInit() {
    this.myCard = [
      {
        imageUrl:
          'https://img.freepik.com/photos-gratuite/concept-ecran-vide-espace-copie-maquette_53876-124219.jpg?w=996&t=st=1709047727~exp=1709048327~hmac=ec6be555d8e01e597935c6b6178cae28cbe453a5abddfc88b544ff23a55f05ae',
        title: 'Ordinateur Portable',
        price: 900,
        description:
          'Processeur I5 10700k, Carte graphique Nvidia 3060, 8go de ram',
        createDate: new Date(),
      },
      {
        imageUrl:
          'https://img.freepik.com/photos-gratuite/close-up-phone-maquette-ecran-blanc_23-2148295859.jpg?t=st=1709050366~exp=1709053966~hmac=29879d1e6cc56df65faa6275bb4ddc08ea596fe4efddeca96df23a52eafbc718&w=826',
        title: 'Téléphone Portable',
        price: 400,
        description:
          'Ecran de 7 pouces, Résolution: 1080 x 2340 pixels (Full HD+) ou 1440 x 3200 pixels (Quad HD+, Mémoire vive (RAM) : Communément entre 4 et 12 Go de RAM.',
        createDate: new Date(),
      },
      {
        imageUrl:
          'https://img.freepik.com/photos-gratuite/libre-partie-kit-batterie-arriere-plan-flou_169016-20614.jpg?t=st=1709050791~exp=1709054391~hmac=941a5e9472151682edb083bf58585d82e322f71636593399b11224c223e08dee&w=740',
        title: 'Batterie',
        price: 1200,
        description:
          'Sonorité riche et authentique : Cette batterie acoustique offre une sonorité puissante et équilibrée, parfaite pour tous les styles de musique, du metal à la pop en passant par le jazz',
        createDate: new Date(),
      },
      {
        imageUrl:
          'https://img.freepik.com/photos-gratuite/concept-ecran-vide-espace-copie-maquette_53876-124219.jpg?w=996&t=st=1709047727~exp=1709048327~hmac=ec6be555d8e01e597935c6b6178cae28cbe453a5abddfc88b544ff23a55f05ae',
        title: 'Ordinateur Portable',
        price: 900,
        description:
          'Processeur I5 10700k, Carte graphique Nvidia 3060, 8go de ram',
        createDate: new Date(),
      },
      {
        imageUrl:
          'https://img.freepik.com/photos-gratuite/close-up-phone-maquette-ecran-blanc_23-2148295859.jpg?t=st=1709050366~exp=1709053966~hmac=29879d1e6cc56df65faa6275bb4ddc08ea596fe4efddeca96df23a52eafbc718&w=826',
        title: 'Téléphone Portable',
        price: 400,
        description:
          'Ecran de 7 pouces, Résolution: 1080 x 2340 pixels (Full HD+) ou 1440 x 3200 pixels (Quad HD+, Mémoire vive (RAM) : Communément entre 4 et 12 Go de RAM.',
        createDate: new Date(),
      },
      {
        imageUrl:
          'https://img.freepik.com/photos-gratuite/libre-partie-kit-batterie-arriere-plan-flou_169016-20614.jpg?t=st=1709050791~exp=1709054391~hmac=941a5e9472151682edb083bf58585d82e322f71636593399b11224c223e08dee&w=740',
        title: 'Batterie',
        price: 1200,
        description:
          'Sonorité riche et authentique : Cette batterie acoustique offre une sonorité puissante et équilibrée, parfaite pour tous les styles de musique, du metal à la pop en passant par le jazz',
        createDate: new Date(),
      },
    ];
  }
}
