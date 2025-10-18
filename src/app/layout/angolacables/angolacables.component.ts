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
    EventosAcComponent,
    CertificacoesComponent,
    SlideshowComponent,
    BlogComponent,
    EventosComponent,
    Ad2Component,
    ArtigoListaComponent,
    EventosListarComponent,
    ParceirosComponent,
    TranslatePipe,
    RouterLink,
    ContadorComponent,
    CaracteristicasComponent,
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
  accordionItems = [{
  title: 'Integrated Global Networks',
  icon: 'world',
  content: `We operate a robust and interconnected backbone, ensuring seamless global communication 
            with high availability, redundancy, and performance for enterprises and service providers.`,
  image: 'img/servicecoverage.png',
  imageDesc:
    'TelCables Europe operates international data circuit capacity and IP Transit via submarine cables of its own such as the SACS - Southern Atlantic Cables System and partner´s as West Africa Cables System - WACS and Ela Link',
},
{
  title: 'Atlantic Ecosystem Aggregation',
  icon: 'social',
  content: `Our infrastructure aggregates strategic routes across the Atlantic, connecting 
            data centers, operators, and cloud providers into a single, resilient ecosystem.`,
  image: 'img/ipnetwork.png',
  imageDesc:
    'We connect data centers and operators across the Atlantic into a resilient ecosystem that strengthens digital transformation and cloud integration.',
},
{
  title: 'Presence Across Continents',
  icon: 'location',
  content: `We already serve customers in Portugal, Europe, the United States, Latin America, and Africa — 
            bridging continents with secure, low-latency connectivity.`,
  image: 'img/globalpresence.png',
  imageDesc:
    'Our infrastructure bridges Europe, the Americas, and Africa with secure, low-latency connectivity, enabling true intercontinental collaboration.',
},
{
  title: 'Neutral and Independent',
  icon: 'more-vertical',
  content: `Our neutral position allows us to interconnect with multiple partners, carriers, and ISPs, 
            ensuring flexibility and freedom of choice for every client.`,
  image: 'img/carrierneutral.jpg',
  imageDesc:
    'Being carrier-neutral, we interconnect with multiple operators and ISPs, giving customers freedom and flexibility to scale their networks.',
},
{
  title: 'Main Gateway to Lisbon',
  icon: 'sign-in',
  content: `We are one of the leading carriers of traffic from Latin America and the US to Lisbon, providing a 
            secure, high-capacity gateway into Europe’s digital hub.`,
  image: 'img/lisbon-europe.png',
  imageDesc:
    'Lisbon serves as a secure and high-capacity gateway into Europe, powered by our transatlantic connectivity from Latin America and the US.',
},
{
  title: 'Atlantic Digital Bridge',
  icon: 'link',
  content: `The Atlantic Digital Bridge provides carrier-grade, cloud-ready, point-to-multipoint connectivity 
            linking Brazil, the United States, and Africa, enabling efficient digital transformation across regions.`,
  image: 'img/digitalbridge.png',
  imageDesc:
    'The Atlantic Digital Bridge delivers carrier-grade connectivity between Brazil, the US, and Africa, supporting enterprise and cloud-driven growth.',
}

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
