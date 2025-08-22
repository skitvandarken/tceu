import { Component, inject } from '@angular/core';
import { Ad2Component } from '../../layout/ad2/ad2.component';

import { TranslateService, TranslatePipe } from '@ngx-translate/core'; // Inserido
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { MenuComponent } from '../../layout/menu/menu.component';

@Component({
  selector: 'app-datacentersevices',
  imports: [
    Ad2Component,
    TranslatePipe, RodapeComponent, MenuComponent// Inserido
  ],
  templateUrl: './datacentersevices.component.html',
  styleUrl: './datacentersevices.component.css'
})
export class DatacentersevicesComponent {

  private translate = inject(TranslateService); // Inserido

  constructor() { // Construtor adicionado/modificado para incluir a lógica de tradução
    this.translate.setDefaultLang('pt'); // Inserido
    this.translate.use(this.translate.currentLang || 'pt'); // Inserido
  }

  useLanguage(language: string): void { // Inserido
    this.translate.use(language); // Inserido
  } // Inserido
}