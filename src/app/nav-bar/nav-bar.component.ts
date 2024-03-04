import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WiziShop } from '../models/wizi-shop.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  panierItems: WiziShop[] = [];
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  goToPanier() {
    this.router.navigate(['/panier']);
  }

  //------- Menu Burger -------//

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
