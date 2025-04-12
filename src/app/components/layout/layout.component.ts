import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,     // For creating card-based layouts
    MatGridListModule, // For grid-based layouts
    MatExpansionModule, // For expandable panels
    MatDividerModule,   // For visual separators
    MatButtonModule,    // For card actions
    MatIconModule      // For icons in cards and panels
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  // Sample data for our layouts
  cards = [
    { title: 'Card 1', content: 'This is a simple card with some content.', image: 'https://picsum.photos/400/300?random=1' },
    { title: 'Card 2', content: 'Another card with different content.', image: 'https://picsum.photos/400/300?random=2' },
    { title: 'Card 3', content: 'Yet another card to demonstrate layout.', image: 'https://picsum.photos/400/300?random=3' }
  ];

  gridItems = [
    { title: 'Item 1', cols: 2, rows: 1 },
    { title: 'Item 2', cols: 1, rows: 2 },
    { title: 'Item 3', cols: 1, rows: 1 }
  ];

  panels = [
    { title: 'Panel 1', content: 'Content for expansion panel 1' },
    { title: 'Panel 2', content: 'Content for expansion panel 2' },
    { title: 'Panel 3', content: 'Content for expansion panel 3' }
  ];
}