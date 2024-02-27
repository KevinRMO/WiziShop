import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'], // Utilisez styleUrls au lieu de styleUrl
})
export class NavBarComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']); // Redirection vers la page d'accueil
  }

  goToPanier() {
    this.router.navigate(['/panier']); // Redirection vers la page du panier
  }
}