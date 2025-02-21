import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  imports: [

  ],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.css'
})
export class ParceirosComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const sliderInner = document.querySelector('.slider-inner') as HTMLElement;
    const images = sliderInner.innerHTML;

    // Duplicate the images
    sliderInner.innerHTML += images; // Append the same images for a seamless effect
  }

}
