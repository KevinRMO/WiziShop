import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component'; // Importez le composant PanierComponent
import { WiziShopComponent } from './wizi-shop/wizi-shop.component';

const routes: Routes = [
  { path: '', component: WiziShopComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
