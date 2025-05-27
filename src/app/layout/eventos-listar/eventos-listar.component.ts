import { Component, inject, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { AsyncPipe, CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import {  TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-eventos-listar',
  imports: [


    AsyncPipe,
    CommonModule,
    
 

  ],
  templateUrl: './eventos-listar.component.html',
  styleUrl: './eventos-listar.component.css'
})
export class EventosListarComponent implements OnInit {


  safeContent: SafeHtml = '';
  private eventoService = inject(EventoService);
  eventos$ = this.eventoService.getEventos();

  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {
    this.eventos$.subscribe(eventos => {
      if (eventos.length > 0) {
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(eventos[0].content);
      }
    });
  }
}
