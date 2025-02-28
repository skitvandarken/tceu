import { Component } from '@angular/core';
import { ContadorComponent } from '../contador/contador.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-numeros',
  imports: [ContadorComponent, TranslatePipe],
  templateUrl: './numeros.component.html',
  styleUrl: './numeros.component.css'
})
export class NumerosComponent {

    useLanguage(language: string): void {
      this.translate.use(language);
  }
  
  constructor(private translate: TranslateService) {}
  

}
