import { Component, inject, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { AsyncPipe, CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { TranslateService } from '@ngx-translate/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-noticias-listar',
  imports: [

    AsyncPipe,
    CommonModule,
    DatePipe,
    TruncatePipe,
    NgIf,

  ],
  templateUrl: './noticias-listar.component.html',
  styleUrl: './noticias-listar.component.css'
})
export class NoticiasListarComponent implements OnInit {


  safeContent: SafeHtml = '';
  private noticiaService = inject(NoticiaService);
  noticias$ = this.noticiaService.getNoticias();

  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {
    this.noticias$.subscribe(noticias => {
      if (noticias.length > 0) {
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(noticias[0].content);
      }
    });
  }
}
