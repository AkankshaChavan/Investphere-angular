import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  isActive : boolean = true;

  // constructor(){

  // }

  items =["Akanksa", "Chavan", "Clover", "Infotech"];

}
