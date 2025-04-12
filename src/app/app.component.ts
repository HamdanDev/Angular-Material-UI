import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgFor } from '@angular/common';


interface MenuItem {
  path: string;
  icon: string;
  label: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    NgFor,
    MatSlideToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  isMenuOpen = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark-theme');
  }

  menuItems: MenuItem[] = [
    { path: '/form-controls', icon: 'description', label: 'Form Controls' },
    { path: '/navigation', icon: 'menu', label: 'Navigation' },
    { path: '/layout', icon: 'grid_view', label: 'Layout' }
  ];
}
