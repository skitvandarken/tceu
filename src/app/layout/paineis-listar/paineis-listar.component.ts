import { Component, inject, OnInit } from '@angular/core';
import { PainelService } from '../../services/painel.service';
import { AsyncPipe, CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RodapeComponent } from '../rodape/rodape.component';
import { MenuComponent } from '../menu/menu.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-paineis-listar',
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
  templateUrl: './paineis-listar.component.html',
  styleUrl: './paineis-listar.component.css'
})
export class PaineisListarComponent implements OnInit {


  safeContent: SafeHtml = '';
  private painelService = inject(PainelService);
  paineis$ = this.painelService.getPaineis();

  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit() {
    this.paineis$.subscribe(paineis => {
      if (paineis.length > 0) {
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(paineis[0].content);
      }
    });
  }
}
