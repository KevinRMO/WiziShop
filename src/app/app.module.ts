import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanierComponent } from './panier/panier.component';
import { PanierService } from './services/panier.services'; // Assurez-vous d'importer le service PanierService ici
import { WiziShopComponent } from './wizi-shop/wizi-shop.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WiziShopListComponent } from './wizi-shop-list/wizi-shop-list.component';
import { DetailWiziShopComponent } from './detail-wizi-shop/detail-wizi-shop.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    AppComponent,
    PanierComponent,
    WiziShopComponent,
    NavBarComponent,
    WiziShopListComponent,
    DetailWiziShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Ajoutez FormsModule ici
  ],
  providers: [PanierService, { provide: LOCALE_ID, useValue: 'fr-FR' }], // Assurez-vous de fournir le service PanierService ici si nécessaire
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
