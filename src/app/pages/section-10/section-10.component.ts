import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-10',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './section-10.component.html',
  styleUrl: './section-10.component.scss'
})
export class Section10Component {
  activeTab: string = "que1";

  setActivetab(tab: string):void{
    this.activeTab=tab;
  }

}
