import { Component, inject, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { AsyncPipe, CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RodapeComponent } from '../rodape/rodape.component';
import { MenuComponent } from '../menu/menu.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-eventos-listar',
  imports: [


    AsyncPipe,
    CommonModule,
    DatePipe,
    NgFor,
    NgIf,
    TranslatePipe,
    RodapeComponent,
    TruncatePipe,
    MenuComponent,
    RouterLink

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
