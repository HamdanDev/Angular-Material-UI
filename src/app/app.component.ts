import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
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
    MatSlideToggleModule,
    MatTableModule
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
    { path: '/form-controls', icon: 'insert_drive_file', label: 'Form Controls' },
    { path: '/navigation', icon: 'navigation', label: 'Navigation' },
    { path: '/layout', icon: 'insert_photo', label: 'Layout' },
    { path: '/data-table', icon: 'table_chart', label: 'Data Table' },
    { path: '/dialogs', icon: 'chat', label: 'Dialogs' }
  ];
}
