import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-teste',
  imports: [TranslateDirective, TranslatePipe],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css',
  standalone: true
})
export class TesteComponent {

  constructor (private translate: TranslateService) {}
  useLanguage(language: string): void {
  this.translate.use(language);

}

}
