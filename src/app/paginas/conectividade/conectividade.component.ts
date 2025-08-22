import { Component, EventEmitter, inject, Output, AfterViewInit, ViewChild } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

import { TranslateService, TranslatePipe } from '@ngx-translate/core'; // Inserido
import { Ad2Component } from '../../layout/ad2/ad2.component';
declare const UIkit: any;

@Component({
  selector: 'app-conectividade',
  imports: [
    MenuComponent,
    RodapeComponent,
    TranslatePipe,
    Ad2Component // Inserido
  
  ],
  templateUrl: './conectividade.component.html',
  styleUrl: './conectividade.component.css'
})
export class ConectividadeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
        this.switcher = UIkit.switcher(this.servicesTabs.nativeElement);

  }

  
  switchTab(tabIndex: number) {
    if (this.switcher) {
      this.switcher.show(tabIndex);
    }
  }

  
  
  @ViewChild('servicesTabs') servicesTabs: any;
  private switcher: any;


  @Output() tabSelected = new EventEmitter<number>(); // Define tabSelected as an EventEmitter

selectTab(tabIndex: number, event: Event) {
    event.preventDefault();
    this.tabSelected.emit(tabIndex);
  }

  private translate = inject(TranslateService); // Inserido

  constructor() { // Construtor adicionado/modificado para incluir a lógica de tradução
    this.translate.setDefaultLang('pt'); // Inserido
    this.translate.use(this.translate.currentLang || 'pt'); // Inserido
  }

  useLanguage(language: string): void { // Inserido
    this.translate.use(language); // Inserido
  } // Inserido
}