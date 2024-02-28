import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WiziShopComponent } from './wizi-shop/wizi-shop.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PanierComponent } from './panier/panier.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { WiziShopListComponent } from './wizi-shop-list/wizi-shop-list.component';
import { DetailWiziShopComponent } from './detail-wizi-shop/detail-wizi-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    WiziShopComponent,
    NavBarComponent,
    PanierComponent,
    WiziShopListComponent,
    DetailWiziShopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
