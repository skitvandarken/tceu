import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { ContadorComponent } from '../contador/contador.component';
import { CaracteristicasComponent } from '../caracteristicas/caracteristicas.component';
import { ParceirosComponent } from '../parceiros/parceiros.component';
import { EventosAcComponent } from '../../paginas/eventos-ac/eventos-ac.component';
import { EventosListarComponent } from '../eventos-listar/eventos-listar.component';
import { Ad2Component } from '../ad2/ad2.component';
import { ArtigoListaComponent } from '../artigo-lista/artigo-lista.component';
import { EventosComponent } from '../eventos/eventos.component';
import { BlogComponent } from '../blog/blog.component';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { NoticiasListarComponent } from '../noticias-listar/noticias-listar.component';
import { CertificacoesComponent } from '../certificacoes/certificacoes.component';

declare const UIkit: any; // To access UIkit globally

@Component({
  selector: 'app-angolacables',
  standalone: true,
  imports: [
    CommonModule,
    CertificacoesComponent,
    SlideshowComponent,
    Ad2Component,
    EventosListarComponent,
    ParceirosComponent,
    TranslatePipe,
    RouterLink,
    NoticiasListarComponent,
    SlideshowComponent,
  ],
  templateUrl: './angolacables.component.html',
  styleUrl: './angolacables.component.css',
})
export class AngolacablesComponent implements AfterViewInit {
  // Holds the currently selected image
  selectedImage: string | null = null;
  selectedImageDesc: string | null = null;

  ngOnInit() {
  if (this.accordionItems.length > 0) {
    this.selectedImage = this.accordionItems[0].image;
    this.selectedImageDesc = this.accordionItems[0].imageDesc;
  }
}

 // Accordion data model
accordionItems = [
  {
    title: 'Atlantic Network Integration',
    icon: 'world',
    content: `Integrating trustable European networks with an Atlantic submarine backbone, providing high availability,
              redundancy, and performance for enterprises and service providers.`,
    image: 'img/servicecoverage.png',
    imageDesc:
      'TelCables Europe interconnects European and Atlantic networks using its own and partner submarine cables, such as SACS, WACS, and EllaLink.',
  },
  {
    title: 'Neutral Atlantic Ecosystem',
    icon: 'social',
    content: `A fully neutral ecosystem aggregating operators, data centers, and cloud providers across Portugal,
              Europe, the US, LATAM, and Africa — enabling seamless digital exchange.`,
    image: 'img/angolacables-telcables-network.png',
    imageDesc:
      'TelCables Europe connects a diverse base of carriers, enterprises, and cloud providers across the Atlantic ecosystem.',
  },
  {
    title: 'Lisbon and Iberian Presence',
    icon: 'location',
    content: `Strong presence in Lisbon and the Iberian metropolitan areas with Data Center interconnectivity,
              ensuring regional resilience and optimized access to global routes.`,
    image: 'img/eu-networks.jpg',
    imageDesc:
      'Lisbon and Iberian network infrastructure with metropolitan and Data Center coverage strengthen local and international connectivity.',
  },
  {
    title: 'Atlantic Digital Bridge',
    icon: 'link',
    content: `Carrier-grade, cloud-ready, and NaaS-enabled connectivity linking Europe, the US, LATAM, and Africa,
              creating a two-way digital bridge for enterprises and carriers.`,
    image: 'img/telcables-europe-mapa.png',
    imageDesc:
      'The Atlantic Digital Bridge enables point-to-multipoint connectivity and intercontinental data exchange with high performance and scalability.',
  },
  {
    title: 'Strategic Global Reach',
    icon: 'sign-in',
    content: `With strategic partnerships spanning 1000+ Data Centers across the US, Brazil, and Europe,
              TelCables Europe delivers extensive coverage and high-capacity IP transit up to 118 Tbps.`,
    image: 'img/ip-network-telcables.jpg',
    imageDesc:
      'A top-20 global peering network with 900+ PoPs and 118 Tbps of total capacity across Layer 1, 2, and 3.',
  },
];

  // Called when user clicks an accordion item
  onSelectImage(image: string, desc?: string) {
    this.selectedImage = image;
    this.selectedImageDesc = desc || null;
  }
  constructor(private translate: TranslateService) {}

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngAfterViewInit(): void {
    const modal = UIkit.modal('#modal-video');

    const video: HTMLVideoElement | null = document.getElementById(
      'promoVideo'
    ) as HTMLVideoElement;

    if (modal && video) {
      document.getElementById('modal-video')?.addEventListener('hidden', () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  }
}
