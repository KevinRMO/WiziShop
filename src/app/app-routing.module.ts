import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component'; // Importez le composant PanierComponent
import { WiziShopListComponent } from './wizi-shop-list/wizi-shop-list.component';
import { DetailWiziShopComponent } from './detail-wizi-shop/detail-wizi-shop.component';

const routes: Routes = [
  { path: 'detail/:id', component: DetailWiziShopComponent },
  { path: '', component: WiziShopListComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
