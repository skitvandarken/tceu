import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contacto',
  imports: [TranslatePipe	],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

      useLanguage(language: string): void {
          this.translate.use(language);
      }
      
      constructor(private translate: TranslateService) {}
      

}
