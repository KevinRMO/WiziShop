import { Injectable } from '@angular/core';
import { WiziShop } from '../models/wizi-shop.model';

@Injectable({
  providedIn: 'root',
})
export class WiziShopService {
  myCard: WiziShop[] = [
    {
      id: 1,
      imageUrl:
        'https://img.freepik.com/photos-gratuite/concept-ecran-vide-espace-copie-maquette_53876-124219.jpg?w=996&t=st=1709047727~exp=1709048327~hmac=ec6be555d8e01e597935c6b6178cae28cbe453a5abddfc88b544ff23a55f05ae',
      title: 'MSI Commercial 14 H A13MG vPro-028FR',
      price: 900,
      description:
        'Intel Core i7-13700H 32 Go SSD 1 To 14" LED Full HD+ Wi-Fi 6E/Bluetooth Webcam Windows 11 Professionnel',
      spec: `Intel Core i7-13700H 32 Go SSD 1 To 14" LED Full HD+ Wi-Fi 6E/Bluetooth Webcam Windows 11 Professionnel`,
      specTwo: `Processeur Intel Core i5-1235U (2 Performance-Cores 4.4 GHz Turbo + 8 Efficient-Cores 3.3 GHz Turbo - 12 Threads - Cache 12 Mo)`,
      specThree: `8 Go de mémoire vive DDR4`,
      specFour: `Écran de 14" avec résolution Full HD (1920 x 1080)`,
      specFive: `SSD M.2 PCIe de 256 Go`,
      createDate: new Date(),
    },
    {
      id: 2,
      imageUrl:
        'https://img.freepik.com/photos-gratuite/close-up-phone-maquette-ecran-blanc_23-2148295859.jpg?t=st=1709050366~exp=1709053966~hmac=29879d1e6cc56df65faa6275bb4ddc08ea596fe4efddeca96df23a52eafbc718&w=826',
      title:
        'ASUS ROG Phone 8 Pro Noir Fantôme (16 Go / 512 Go) + Aeroactive Cooler X',
      price: 400,
      description:
        'Smartphone 5G-LTE Dual SIM IP68 - Snapdragon 8 Gen 3 - RAM 16 Go - Ecran tactile AMOLED 165 Hz 6.78" 1080 x 2400 - 512 Go - NFC/Bluetooth 5.3 - 5500 mAh - Android 14 + Système de refroidissement thermoélectrique',
      spec: `Processeur : Qualcomm Snapdragon 8 Gen 3`,
      specTwo: `Android 14 + ROG UI - Zen UI`,
      specThree: `Ecran 6.78" AMOLED, résolution 1080 x 2400 pixels, ratio 20:9, taux de rafraichissement de 165 Hz, HDR10+, taux d'échantillonnage tactile 720 Hz`,
      specFour: `RAM : 16 Go`,
      specFive: `Stockage : 512 Go (UFS 4.0)`,
      createDate: new Date(),
    },
    {
      id: 3,
      imageUrl:
        'https://img.freepik.com/photos-gratuite/libre-partie-kit-batterie-arriere-plan-flou_169016-20614.jpg?t=st=1709050791~exp=1709054391~hmac=941a5e9472151682edb083bf58585d82e322f71636593399b11224c223e08dee&w=740',
      title: 'Millenium MPS-1000 D2 E-Drum Set NT',
      price: 900,
      description:
        'Batterie électronique au look acoustique, fûts en bois avec peaux maillées double pli, pads de cymbale entièrement jouables',
      spec: `Fûts tilleul 6 plis 7,2 mm`,
      specTwo: `Support toms à rotules pouvant,Equipée de peaux REMO`,
      specThree: `Pique de grosse caisse téléscopique`,
      specFour: `Nouvelle pédale de grosse caisse et Charleston`,
      specFive: `Cymbale charleston 14" et crash 16"`,
      createDate: new Date(),
    },
    {
      id: 4,
      imageUrl:
        'https://img.freepik.com/photos-gratuite/guitariste-joue-guitare-acoustique-capodastre-devant-microphone_169016-10606.jpg?w=1380&t=st=1709134759~exp=1709135359~hmac=a474e0fdaddc1912c7e9bddbbd34917cc73defd8c7ca4bb4af2065ee4ae860fb',
      title: 'Ibanez GRGR221PA-AQB',
      price: 279,
      description:
        'Corps en okoumé , Table en peuplier, Manche vissé en érable',
      spec: `Touche en amarante `,
      specTwo: `Filet de touche`,
      specThree: `Repères "dents de requin" blanches inversées`,
      specFour: `Largeur au sillet: 43 mm , Diapason: 648 mm`,
      specFive: `24 frettes Jumbo ,2 micros double bobinage IBZ 6, 1 réglage de volume`,
      createDate: new Date(),
    },
    {
      id: 5,
      imageUrl:
        'https://img.freepik.com/photos-gratuite/gamer-femme-appuyant-bouton-demarrage-ordinateur-rvb-pendant-jeux-video-tir-spatial-pendant-competition-ligne-debout-dans-studio-jeu-systeme-exploitation-pc-professionnel-pour-joueurs-esports_482257-33483.jpg?t=st=1709134851~exp=1709138451~hmac=02325e7d9bcb46b6c6670c3a20944e83814f3fd65e3b4f70bd30d87f4990b76c&w=740',
      title: 'PC11 Bazooka Gen 12',
      price: 999,
      description:
        'PC gamer Intel Core i5-12400F 16 Go SSD 500 Go NVIDIA GeForce RTX 4060 8 Go LAN 2.5 GbE Windows 11 Famille (monté)',
      spec: `Processeur AMD Ryzen 7 5800X (3.8 GHz / 4.7 GHz)`,
      specTwo: `Carte mère ASUS ROG STRIX B550-F GAMING (WI-FI) II`,
      specThree: `32 Go DDR4 3200 MHz`,
      specFour: `Carte graphique NVIDIA GeForce RTX 4060 Ti 8 Go`,
      specFive: `Samsung SSD 980 M.2 PCIe NVMe 1 To`,
      createDate: new Date(),
    },
    {
      id: 6,
      imageUrl:
        'https://img.freepik.com/photos-gratuite/gros-plan-mains-ingenieur-tapant-clavier-dans-bureau-domicile_482257-23398.jpg?t=st=1709134992~exp=1709138592~hmac=13ab7cee8813477a8ef5e8c28d81e12ee3cd3788b95d0d9b2fdca16f59f5b94f&w=1380',
      title: 'BlackWidow V4 (switches Razer Green)',
      price: 189,
      description:
        'Clavier gaming - interrupteurs mécaniques verts à clics tactiles (switches Razer Green) - molette multimédia - rétroéclairage RGB Razer Chroma - AZERTY, Français',
      spec: `Clavier gamer filaire`,
      specTwo: `Touches mécaniques à switches Razer Green pour des performances exceptionnelles et une résistance à toute épreuve`,
      specThree: `Durée de vie de 100 millions de frappes`,
      specFour: `Molette de commande Razer avec 4 boutons`,
      specFive: `Rétroéclairage multicolore personnalisable (parmi 16.8 millions de couleurs)`,
      createDate: new Date(),
    },
  ];

  getAllWiziShop(): WiziShop[] {
    return this.myCard;
  }

  getWiziShopById(cardId: number): WiziShop {
    const myCardId = this.myCard.find((myCardItem) => myCardItem.id === cardId);
    if (!myCardId) {
      throw new Error('WiziShop not found!');
    } else {
      return myCardId;
    }
  }
}
