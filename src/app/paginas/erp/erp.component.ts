import { Component, inject } from '@angular/core';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { MenuComponent } from '../../layout/menu/menu.component';

import { TranslateService, TranslatePipe } from '@ngx-translate/core'; // Inserido

@Component({
  selector: 'app-erp',
  imports: [RodapeComponent, MenuComponent, TranslatePipe], // Inserido
  templateUrl: './erp.component.html',
  styleUrl: './erp.component.css'
})
export class ErpComponent {

  private translate = inject(TranslateService); // Inserido

  constructor() { // Construtor adicionado/modificado para incluir a lógica de tradução
    this.translate.setDefaultLang('pt'); // Inserido
    this.translate.use(this.translate.currentLang || 'pt'); // Inserido
  }

  useLanguage(language: string): void { // Inserido
    this.translate.use(language); // Inserido
  } // Inserido
}