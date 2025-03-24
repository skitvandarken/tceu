import { Component } from '@angular/core';
import { TelcablesComponent } from '../../layout/telcables/telcables.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-acerca',
  imports: [

    MenuComponent,
    TelcablesComponent, RodapeComponent, TranslatePipe
  ],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent {

      useLanguage(language: string): void {
            this.translate.use(language);
        }
        
        constructor(private translate: TranslateService) {}

}
