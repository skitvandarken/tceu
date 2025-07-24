import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { ContadorComponent } from '../contador/contador.component';
import { CaracteristicasComponent } from "../caracteristicas/caracteristicas.component";
import { ParceirosComponent } from '../parceiros/parceiros.component';
import { EventosAcComponent } from '../../paginas/eventos-ac/eventos-ac.component';
import { EventosListarComponent } from '../eventos-listar/eventos-listar.component';

declare const UIkit: any; // To access UIkit globally

@Component({
  selector: 'app-angolacables',
  standalone: true,
  imports: [CommonModule, EventosAcComponent, EventosListarComponent, ParceirosComponent, TranslatePipe, RouterLink, ContadorComponent, CaracteristicasComponent],
  templateUrl: './angolacables.component.html',
  styleUrl: './angolacables.component.css'
})
export class AngolacablesComponent implements AfterViewInit {

  constructor(private translate: TranslateService) {}

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngAfterViewInit(): void {
    const modal = UIkit.modal('#modal-video');

    const video: HTMLVideoElement | null = document.getElementById('promoVideo') as HTMLVideoElement;

    if (modal && video) {
      document.getElementById('modal-video')?.addEventListener('hidden', () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  }
}
