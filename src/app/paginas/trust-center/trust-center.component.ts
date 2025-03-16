import { Component, AfterViewInit } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { CaracteristicasComponent } from '../../layout/caracteristicas/caracteristicas.component';

@Component({
  selector: 'app-trust-center',
  imports: [MenuComponent, RodapeComponent, CaracteristicasComponent],
  templateUrl: './trust-center.component.html',
  styleUrl: './trust-center.component.css'
})
export class TrustCenterComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const sliderInner = document.querySelector('.slider-inner') as HTMLElement;
    const images = sliderInner.innerHTML;

    // Duplicate the images
    sliderInner.innerHTML += images; // Append the same images for a seamless effect
  }

}
