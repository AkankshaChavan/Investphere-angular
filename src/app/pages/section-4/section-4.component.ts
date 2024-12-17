import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// declare var $: any;


@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.scss'
})
export class Section4Component {
  // ngOnInit() {
  //   if (typeof $ !== 'undefined') {
  //     console.log("working1",typeof $ !== 'undefined');
  //     console.log("working");
  //   } else {
  //     console.error('not working 2');
  //   }


  //   $(document).ready(function() {
  //     $('.card-slider').slick({
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       autoplay: true,
  //       autoplaySpeed: 2000,
  //       arrows: true,
  //       responsive: [
  //         {
  //           breakpoint: 768,   
  //           settings: {
  //             slidesToShow: 1, 
  //             slidesToScroll: 1
  //           }
  //         },
  //         {
  //           breakpoint: 1024,  
  //           settings: {
  //             slidesToShow: 2, 
  //             slidesToScroll: 1
  //           }
  //         }
  //       ]
  //     });
  //   })
  // }
}

