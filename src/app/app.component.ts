import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './pages/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { Section1Component } from './pages/section-1/section-1.component';
import { Section2Component } from './pages/section-2/section-2.component';
import { Section3Component } from './pages/section-3/section-3.component';
import { Section4Component } from './pages/section-4/section-4.component';
import { Section5Component } from './pages/section-5/section-5.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, 
    HeaderComponent, HeroComponent, 
    Section1Component, Section2Component, 
    Section3Component, Section4Component,
    Section5Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
  isActive : boolean = true;
}
