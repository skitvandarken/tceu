import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

import { TranslateService, TranslatePipe } from '@ngx-translate/core'; // Inserido

@Component({
  selector: 'app-conectividade',
  imports: [
    MenuComponent,
    RodapeComponent,
    TranslatePipe // Inserido
  ],
  templateUrl: './conectividade.component.html',
  styleUrl: './conectividade.component.css'
})
export class ConectividadeComponent {

  private translate = inject(TranslateService); // Inserido

  constructor() { // Construtor adicionado/modificado para incluir a lógica de tradução
    this.translate.setDefaultLang('pt'); // Inserido
    this.translate.use(this.translate.currentLang || 'pt'); // Inserido
  }

  useLanguage(language: string): void { // Inserido
    this.translate.use(language); // Inserido
  } // Inserido
}