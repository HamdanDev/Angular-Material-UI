import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,    // For tab navigation
    MatMenuModule,    // For dropdown menus
    MatButtonModule,  // For buttons
    MatIconModule,    // For material icons
    MatStepperModule, // For stepper component
    FormsModule,      // For form bindings
    RouterModule      // For routing
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {
  selectedTab = 0;  // Tracks active tab
  steps = ['Basic Info', 'Details', 'Review'];  // Stepper steps
  currentStep = 0;  // Tracks current step

  // Navigation methods
  navigateTo(path: string) {
    window.location.href = path;
  }
}