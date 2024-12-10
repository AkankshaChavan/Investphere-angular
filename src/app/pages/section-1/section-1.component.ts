import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss'
})
export class Section1Component {

  activeTab: string = "form-1";

  setActiveTab (tab: string):void{
    this.activeTab = tab;
  }

}
