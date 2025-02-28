import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-caracteristicas',
  imports: [ TranslatePipe],
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.css'
})
export class CaracteristicasComponent {

  constructor (private translate: TranslateService) {}
  useLanguage(language: string): void {
    this.translate.use(language);
}


}
